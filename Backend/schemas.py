from pydantic import BaseModel


class ChampionSchema(BaseModel):
    Nom: str
    Atk_spd: float
    Damage_1: int
    Damage_2: int
    Damage_3: int
    Portee: int
    Vie_1: int
    Vie_2: int
    Vie_3: int
    Mana: int
    Armor: int
    MR: int
