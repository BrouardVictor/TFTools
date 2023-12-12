from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError

def get_sessionlocal():
    try:
        DB_USER = "root"
        DB_PASSWORD = "0000"
        DB_HOST = "127.0.0.1"
        DB_NAME = "tftools-db"
        DB_PORT = "3306"

        SQLALCHEMY_DATABASE_URL = f"mysql+mysqlconnector://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"

        engine = create_engine(SQLALCHEMY_DATABASE_URL)

        SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
        return SessionLocal
    except SQLAlchemyError as e:
        raise
