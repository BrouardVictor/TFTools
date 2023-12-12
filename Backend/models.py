from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Champion(Base):
    __tablename__ = "Champions"

    Nom = Column(String(50), primary_key=True, index=True)
    Atk_spd = Column(Float)
    Damage_1 = Column(Integer)
    Damage_2 = Column(Integer)
    Damage_3 = Column(Integer)
    Portee = Column(Integer)
    Vie_1 = Column(Integer)
    Vie_2 = Column(Integer)
    Vie_3 = Column(Integer)
    Mana = Column(Integer)
    Armor = Column(Integer)
    MR = Column(Integer)
