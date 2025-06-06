import Product from "../models/Product.js";

const initialProducts = [
  {
    name: "Paracetamol",
    safety: "safe",
    notes: "Safe for occasional use to reduce fever or pain.",
    source:
      "https://www.natalben.com/el-embarazo-y-tus-dudas/embarazada-paracetamol-seguro",
  },
  {
    name: "Ibuprofen",
    safety: "unsafe",
    notes:
      "Not recommended during pregnancy, especially in the third trimester.",
    source: "https://www.ncbi.nlm.nih.gov/books/NBK582760/",
  },

  {
    name: "Aspirin (low dose)",
    safety: "caution",
    notes:
      "Low-dose aspirin might be prescribed to prevent complications, but higher doses should be avoided during pregnancy.",
    source:
      "https://www.mayoclinic.org/diseases-conditions/diabetes/expert-answers/blood-glucose-monitors/faq-20057902", // temporary link
  },
  {
    name: "Green Tea",
    safety: "caution",
    notes:
      "Contains caffeine and catechins; limit intake during pregnancy to avoid potential risks.",
    source:
      "https://www.healthline.com/health/pregnancy/green-tea-while-pregnant",
  },

  {
    name: "Sunscreen SPF 50",
    safety: "safe",
    notes:
      "Mineral-based sunscreens with zinc oxide or titanium dioxide are recommended during pregnancy.",
    source: "https://www.thebump.com/a/sunscreen-safe-during-pregnancy",
  },
  {
    name: "Hair Dye",
    safety: "caution",
    notes:
      "Generally safe during pregnancy, especially after the first trimester; opt for ammonia-free dyes and ensure proper ventilation.",
    source:
      "https://www.nhs.uk/start-for-life/pregnancy/using-hair-dye-in-pregnancy-is-it-safe/",
  },
  {
    name: "Retinol (Vitamin A)",
    safety: "unsafe",
    notes:
      "High doses of Vitamin A (retinol) can cause birth defects and should be avoided during pregnancy.",
    source: "https://www.healthline.com/health/pregnancy/retinol-pregnancy",
  },
  {
    name: "Chamomile Tea",
    safety: "caution",
    notes:
      "Chamomile may have relaxing properties, but excessive consumption can lead to complications during pregnancy.",
    source: "https://www.healthline.com/health/pregnancy/chamomile-tea",
  },
  {
    name: "Hot Dogs",
    safety: "caution",
    notes:
      "Can be eaten if heated properly to avoid listeria; cold or undercooked hot dogs should be avoided.",
    source: "https://www.acog.org/womens-health/faqs/listeria-and-pregnancy",
  },
  {
    name: "Raw Fish (e.g., sushi)",
    safety: "unsafe",
    notes:
      "Raw or undercooked fish can carry parasites and bacteria, and may contain high levels of mercury. It is best to avoid during pregnancy.",
    source: "https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/",
  },
];

export async function loadInitialData() {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(initialProducts);
      console.log("initial products loaded into de database");
    } else {
      console.log("Datebae already has products");
    }
  } catch (error) {
    console.log("Error", error);
  }
}
