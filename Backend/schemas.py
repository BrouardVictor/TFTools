from pydantic import BaseModel


class ChampionSchema(BaseModel):
    name: str
    atk_spd: float
    damage_1: int
    damage_2: int
    damage_3: int
    range: int
    life_1: int
    life_2: int
    life_3: int
    mana: int
    armor: int
    mr: int
