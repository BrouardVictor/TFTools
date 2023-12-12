from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

def get_sessionlocal():
    try:
        DB_USER = "tftoolsuser"
        DB_PASSWORD = "00000000"
        DB_HOST = "localhost"
        DB_NAME = "tftools-db"
        DB_PORT = "5432"

        SQLALCHEMY_DATABASE_URL = f"mysql+mysqlconnector://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

        engine = create_engine(SQLALCHEMY_DATABASE_URL)

        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
        return SessionLocal
    except SQLAlchemyError as e:
        raise
