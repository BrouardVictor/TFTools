from fastapi import FastAPI, Depends, HTTPException, status
from sqlalchemy.orm import Session
from api_queries import get_db, get_champion, create_champion, update_champion, delete_champion
from schemas import ChampionSchema as Champion


app = FastAPI()


@app.get("/")
def read_root():
    return {"message": "Welcome to my TFTools !"}


@app.get("/champion/{champion_name}", response_model=Champion)
def read_champion(champion_name: str, db: Session = Depends(get_db)):
    db_champion = get_champion(db, champion_name)
    if db_champion is None:
        raise HTTPException(status_code=404, detail="Champion not found")
    return db_champion


@app.post("/champion/", response_model=Champion, status_code=status.HTTP_201_CREATED)
def add_new_champion(champion: Champion, db: Session = Depends(get_db)):
    return create_champion(db, champion)


@app.put("/champion/{champion_name}", response_model=Champion)
def update_existing_champion(champion_name: str, champion: Champion, db: Session = Depends(get_db)):
    db_champion = update_champion(db, champion_name, champion)
    if db_champion is None:
        raise HTTPException(status_code=404, detail="Champion not found")
    return db_champion


@app.delete("/champion/{champion_name}", status_code=status.HTTP_204_NO_CONTENT)
def delete_champion_endpoint(champion_name: str, db: Session = Depends(get_db)):
    result = delete_champion(db, champion_name)
    if not result:
        raise HTTPException(status_code=404, detail="Champion not found")