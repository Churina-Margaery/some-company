from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

# Initialize FastAPI app
app = FastAPI()

# Define the request model
class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/contact")
async def contact(request: ContactRequest):
    return {"message": f"Thank you for your interest, {request.name}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)