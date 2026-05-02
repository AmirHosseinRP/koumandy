export type Points = "200" | "400" | "600" | "800" | "1000";

export type Question = {
  question: string;
  answer: string;
  options?: string[];
};

export const CategoryKey = {
  SCIENCE: "SCIENCE",
  GENERAL_KNOWLEDGE: "GENERAL_KNOWLEDGE",
  HISTORY: "HISTORY",
  LITERATURE: "LITERATURE",
  FOOD_AND_DRINKS: "FOOD_AND_DRINKS",
  ART: "ART",
  SPORTS_AND_FUN_ACTIVITIES: "SPORTS_AND_FUN_ACTIVITIES",
  GAMES_MOVIES_AND_TV_SERIES: "GAMES_MOVIES_AND_TV_SERIES",
  GEOGRAPHY: "GEOGRAPHY",
} as const;

export type CategoryKey = (typeof CategoryKey)[keyof typeof CategoryKey];

export function getCategory(key: CategoryKey) {
  const values = {
    [CategoryKey.SCIENCE]: { title: "علمی" },
    [CategoryKey.GENERAL_KNOWLEDGE]: { title: "اطلاعات عمومی" },
    [CategoryKey.HISTORY]: { title: "تاریخ" },
    [CategoryKey.LITERATURE]: { title: "ادبیات" },
    [CategoryKey.FOOD_AND_DRINKS]: { title: "غذا و نوشیدنی" },
    [CategoryKey.ART]: { title: "هنر" },
    [CategoryKey.SPORTS_AND_FUN_ACTIVITIES]: { title: "ورزش و سرگرمی" },
    [CategoryKey.GAMES_MOVIES_AND_TV_SERIES]: { title: "گیم، فیلم و سریال" },
    [CategoryKey.GEOGRAPHY]: { title: "جغرافیا" },
  };

  return values[CategoryKey[key]];
}

export type GameData = Record<CategoryKey, Record<Points, Question>>;
