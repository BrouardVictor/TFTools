from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Champion(Base):
    __tablename__ = "Champions"

    name = Column(String(50), primary_key=True, index=True)
    atk_spd = Column(Float)
    damage_1 = Column(Integer)
    damage_2 = Column(Integer)
    damage_3 = Column(Integer)
    range = Column(Integer)
    life_1 = Column(Integer)
    life_2 = Column(Integer)
    life_3 = Column(Integer)
    mana = Column(Integer)
    armor = Column(Integer)
    mr = Column(Integer)
