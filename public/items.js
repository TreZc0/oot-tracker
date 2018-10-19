var defaultItemGrid = [
    [
        "Bombs",
        "Bow",
        "ForestMedallion",
        "blank",
        "KokiriSword",
        "BiggoronSword",
        "Bombchu"
    ],
    [
        "Boomerang",
        "Hammer",
        "FireMedallion",
        "blank",
        "Skulltula",
        "Wallet",
        "Slingshot"

    ],
    [
        "Hookshot",
        "Spells",
        "WaterMedallion",
        "blank",
        "Nayrus",
        "ZoraTunic",
        "GoronTunic"
    ],
    [
        "ZoraLetter",
        "Arrows",
        "SpiritMedallion",
        "blank",
        "Ice",
        "Magic",
        "Lens"
    ],
    [
        "MirrorShield",
        "Glove",
        "ShadowMedallion",
        "blank",
        "blank",
        "Bottle",
        "StoneofAgony"
    ],
    [
        "Boots",
        "Scale",
        "LightMedallion",
        "blank",
        "ZeldasLullaby",
        "EponasSong",
        "SariasSong"
    ],
    [
        "KokiriEmerald",
        "GoronRuby",
        "ZoraSapphire",
        "blank",
        "SunsSong",
        "SongofTime",
        "SongofStorms"
    ],
    [
        "blank",
        "MinuetofForest",
        "BoleroofFire",
        "SerenadeofWater",
        "RequiemofSpirit",
        "NocturneofShadow",
        "PreludeofLight"
    ]
]


var itemsInit = {
    Bow:0,
    Hookshot:0,
    Hammer:false,
    Slingshot:0,
    Boomerang:false,
    Bombs:0,
    Bombchu:false,
    Lens:false,
    Dins:false,
    Farores:false,
    Nayrus:false,
    Spells: 0,
    Arrows: 0,
    Ice:false,
    Fire:false,
    Light:false,
    Ocarina:1,
    Bottle:0,
    Wallet:0,
    Skulltula:0,

    KokiriSword:false,
    BiggoronSword:false,
    MirrorShield:false,
    GoronTunic:false,
    ZoraTunic:false,
    IronBoots:false,
    HoverBoots:false,
    Boots: 0,
    Glove:0,
    Scale:0,
    StoneofAgony:false,
    Magic:0,
    ZoraLetter:false, 

    ZeldasLullaby:false,
    EponasSong:false,
    SunsSong:false,
    SariasSong:false,
    SongofTime:false,
    SongofStorms:false,
    MinuetofForest:false,
    PreludeofLight:false,
    BoleroofFire:false,
    SerenadeofWater:false,
    NocturneofShadow:false,
    RequiemofSpirit:false,

    KokiriEmerald:false,
    GoronRuby:false,
    ZoraSapphire:false,
    ForestMedallion:false,
    FireMedallion:false,
    WaterMedallion:false,
    SpiritMedallion:false,
    ShadowMedallion:false,
    LightMedallion:false,

    blank: false
};

var dungeonchestsInit = {
    0: 7,
    1: 11,
    2: 22,
    3: 20,
    4: 14,
    5: 18,
    6: 7,
    7: 15,
    8: 4,
    9: 5,
    10: 14,
    11: 15,
    12: 11,
    13: 23,
    14: 7,
    15: 11,
    16: 6,
    17: 10    
}

var medallionsInit = [];
medallionsInit = {
        ForestMedallion: 0,
        FireMedallion: 0,
        WaterMedallion: 0,
        ShadowMedallion: 0,
        SpiritMedallion: 0,
        LightMedallion: 0,
        KokiriEmerald: 0,
        GoronRuby: 0,
        ZoraSapphire: 0,
};

var itemsMin = {
    Bow:0,
    Slingshot:0,
    Bombs:0,    
    Hookshot:0,
    Ocarina:1,
    Bottle:0,
    Glove:0,
    Scale:0,
    Magic:0,
    Wallet:0,
    Skulltula:0,
    Arrows:0,
    Boots:0,
    Spells:0,
};

var itemsMax = {
    Bow:3,
    Slingshot:3,
    Bombs:3,    
    Hookshot:2,
    Ocarina:2,
    Bottle:4,
    Glove:3,
    Scale:2,
    Magic:2,
    Wallet:2,
    Skulltula:5,
    Arrows:3,
    Boots:3,
    Spells:3,
};