from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain.llms.bedrock import Bedrock
import uvicorn
app = FastAPI()

app.add_middleware(
    CORSMiddleware,#0563bb90
    allow_origins=["*"],  # Replace "*" with specific allowed origins in production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods, including OPTIONS
    allow_headers=["*"],  # Allow all headers
)

# Load your chatbot model
def demo_chatbot():
    model = Bedrock(
        credentials_profile_name="default",  # AWS credentials profile
        region_name="us-east-1",
        model_id="amazon.titan-text-premier-v1:0",  # Amazon Bedrock model
        model_kwargs={
            "temperature": 0.9,
            # "max_tokens_to_sample": 50,
            # "stop": ["\n\n\n"]
        },
    )
    return model

# Define the request schema
class ChatRequest(BaseModel):
    message: str

# Define the chat endpoint
@app.post("/chat")
async def chat(chat_request: ChatRequest):
    print(chat_request)
    user_message = chat_request.message
    if not user_message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty.")

    try:
        # Generate a response from the chatbot model
        model = demo_chatbot()
        response = model.predict(user_message)
        return {"reply": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

# Health check endpoint
@app.get("/")
def read_root():
    return {"message": "Chatbot API is running"}

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5000)
