export type Point = "200" | "400" | "600" | "800" | "1000";

export type Question = {
  question: string;
  answer: string;
  options?: string[];
};

export const Category = {
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

export type Category = (typeof Category)[keyof typeof Category];

export function getCategory(key: Category) {
  const values = {
    [Category.SCIENCE]: { title: "علمی", delay: 0.2 },
    [Category.GENERAL_KNOWLEDGE]: { title: "اطلاعات عمومی", delay: 0.3 },
    [Category.HISTORY]: { title: "تاریخ", delay: 0.4 },
    [Category.LITERATURE]: { title: "ادبیات", delay: 0.5 },
    [Category.FOOD_AND_DRINKS]: { title: "غذا و نوشیدنی", delay: 0.6 },
    [Category.ART]: { title: "هنر", delay: 0.7 },
    [Category.SPORTS_AND_FUN_ACTIVITIES]: { title: "ورزش و سرگرمی", delay: 0.8 },
    [Category.GAMES_MOVIES_AND_TV_SERIES]: { title: "گیم، فیلم و سریال", delay: 0.9 },
    [Category.GEOGRAPHY]: { title: "جغرافیا", delay: 1 },
  };

  return values[Category[key]];
}

export type GameData = Record<Category, Record<Point, Question>>;
