from database import get_sessionlocal
from sqlalchemy.orm import Session
from models import Champion

SessionLocal = get_sessionlocal()


def get_db():
    db = SessionLocal()
    try:
        yield db
    except Exception as e:
        raise
    finally:
        db.close()


def get_champion(db: Session, champion_name: str):
    try:
        return db.query(Champion).filter(Champion.Nom == champion_name).first()
    except Exception as e:
        raise


def create_champion(db: Session, champion: Champion):
    try:
        new_champion = Champion(**champion.dict())
        db.add(new_champion)
        db.commit()
        db.refresh(new_champion)
        return new_champion
    except Exception as e:
        raise


def update_champion(db: Session, champion_name: str, champion: Champion):
    try:
        db_champion = db.query(Champion).filter(Champion.Nom == champion_name).first()
        if db_champion:
            for var, value in vars(champion).items():
                setattr(db_champion, var, value) if value else None
            db.commit()
            db.refresh(db_champion)
            return db_champion
    except Exception as e:
        raise


def delete_champion(db: Session, champion_name: str):
    try:
        db_champion = db.query(Champion).filter(Champion.Nom == champion_name).first()
        if db_champion:
            db.delete(db_champion)
            db.commit()
            return True
        return False
    except Exception as e:
        raise
