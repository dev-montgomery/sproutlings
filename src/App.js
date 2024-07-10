import './App.css';
import Card from "./components/Card";
// import Story from "./components/Story";
// import Contact from "./components/Contact";

function App() {

  const items = [
    {
      name: "Radish Microgreens",
      description: "Radish microgreens are young seedlings of the radish plant harvested just after the first true leaves have developed. They are small, tender, and vibrant, with a peppery flavor similar to that of mature radishes but often more intense. Radish microgreens are popular for their crisp texture and nutrient density.",
      meals: {
        salads: "Add a handful of radish microgreens to mixed green salads for an extra burst of flavor and a peppery kick.",
        sandwichesAndWraps: "Use radish microgreens as a fresh, crunchy layer in sandwiches, wraps, and burgers.",
        tacosAndBurritos: "Sprinkle radish microgreens on tacos or burritos for added texture and taste.",
        smoothies: "Blend a small amount of radish microgreens into green smoothies for a nutritional boost without overpowering the flavor.",
        soups: "Garnish soups, especially those that are cream-based or vegetable-based, with radish microgreens just before serving.",
        stirFries: "Add radish microgreens at the end of a stir-fry for a fresh, crisp element.",
        omelettesAndScrambledEggs: "Mix radish microgreens into omelettes or scrambled eggs for a nutritious and flavorful addition.",
        garnishes: "Use them as a garnish for a variety of dishes, from avocado toast to grilled fish.",
      },
      health: {
        NutrientRich: "Radish microgreens are packed with vitamins A, C, E, and K, as well as essential minerals like calcium, magnesium, potassium, and iron.",
        Antioxidants: "They are high in antioxidants, which help combat oxidative stress and reduce the risk of chronic diseases.",
        AntiInflammatory: "The compounds in radish microgreens have anti-inflammatory properties that can help reduce inflammation in the body.",
        DigestiveHealth: "The fiber in radish microgreens aids in digestion and promotes a healthy gut.",
        ImmuneSupport: "High levels of vitamin C in radish microgreens support immune function and overall health.",
        Detoxification: "Radish microgreens can support liver function and aid in the detoxification process due to their high chlorophyll content.",
        HeartHealth: "The potassium and magnesium in radish microgreens help regulate blood pressure and support cardiovascular health.",
        BoneHealth: "Calcium and vitamin K in radish microgreens are essential for maintaining strong bones and preventing osteoporosis.",
      },
      price: "5",
      status: "available"
    },
    {
      name: "Broccoli Sprouts",
      description: "Broccoli sprouts microgreens are the young seedlings of the broccoli plant, harvested just after the cotyledon leaves have developed. They are small, delicate, and packed with a slightly milder flavor compared to mature broccoli, with a fresh and crunchy texture.",
      meals: {
        Salads: "Add a generous handful of broccoli sprouts microgreens to mixed salads for a fresh and nutritious boost.",
        SandwichesAndWraps: "Use them as a layer in sandwiches, wraps, and burgers for a crunchy texture and mild flavor.",
        Smoothies: "Blend a small amount into green smoothies for an extra dose of nutrients without overpowering the flavor.",
        Soups: "Garnish soups, particularly vegetable-based or creamy ones, with broccoli sprouts microgreens for added freshness.",
        StirFries: "Add them to stir-fries at the end of cooking to preserve their crisp texture and nutritional value.",
        OmelettesAndScrambledEggs: "Mix broccoli sprouts microgreens into omelettes or scrambled eggs for a healthy and flavorful addition.",
        BowlsAndGrainDishes: "Top grain bowls, quinoa dishes, or rice dishes with a sprinkle of broccoli sprouts microgreens.",
        PastaAndNoodles: "Use them as a garnish for pasta dishes or noodle bowls to enhance flavor and nutrition.",
      },
      health: {
        RichInSulforaphane: "Broccoli sprouts microgreens are exceptionally high in sulforaphane, a compound known for its powerful antioxidant and anti-inflammatory properties. Sulforaphane may help reduce the risk of cancer and support detoxification processes in the body.",
        NutrientDense: "These microgreens are packed with vitamins A, C, E, and K, as well as essential minerals like calcium, potassium, and iron.",
        AntioxidantPowerhouse: "High levels of antioxidants help combat oxidative stress and may reduce the risk of chronic diseases.",
        Detoxification: "The high sulforaphane content supports liver detoxification and the elimination of toxins from the body.",
        ImmuneSupport: "The vitamin C and other nutrients in broccoli sprouts microgreens help boost the immune system and overall health.",
        DigestiveHealth: "The fiber in these microgreens aids in digestion and promotes a healthy gut microbiome.",
        HeartHealth: "The potassium and antioxidants support cardiovascular health by helping to regulate blood pressure and reduce inflammation.",
        BoneHealth: "Rich in vitamin K and calcium, broccoli sprouts microgreens contribute to maintaining strong bones and preventing osteoporosis.",
      },
      price: "5",
      status: "available"
    },
    {
      name: "Black Oil Sunflower",
      description: "Black oil sunflower microgreens are the young shoots of sunflower plants, harvested when they are about 1-3 inches tall. They are known for their crunchy texture and nutty flavor, making them a versatile addition to various dishes.",
      meals: {
        Salads: "Add a handful of sunflower microgreens to salads for a crunchy texture and a nutty taste.",
        SandwichesAndWraps: "Use them as a layer in sandwiches, wraps, and burgers for added flavor and crunch.",
        Smoothies: "Blend a small amount into green smoothies for an extra dose of nutrients without overpowering the flavor.",
        Soups: "Garnish soups with sunflower microgreens just before serving to add freshness and a slight nutty flavor.",
        StirFries: "Toss them into stir-fries at the end of cooking to maintain their texture and nutritional value.",
        OmelettesAndScrambledEggs: "Mix sunflower microgreens into omelettes or scrambled eggs for a nutritious and flavorful addition.",
        BowlsAndGrainDishes: "Top grain bowls, quinoa dishes, or rice dishes with a sprinkle of sunflower microgreens.",
        PastaAndNoodles: "Use them as a garnish for pasta dishes or noodle bowls to enhance flavor and nutrition.",
        Snacks: "Eat them on their own as a healthy snack or add them to homemade energy bars.",
      },
      health: {
        RichInNutrients: "Sunflower microgreens are packed with vitamins A, B, C, D, and E, as well as essential minerals like calcium, iron, magnesium, potassium, and zinc.",
        HighInAntioxidants: "These microgreens contain antioxidants that help protect cells from damage and reduce the risk of chronic diseases.",
        GoodSourceOfProtein: "Sunflower microgreens are a good plant-based source of protein, which is essential for muscle repair and growth.",
        DigestiveHealth: "The fiber content in sunflower microgreens aids in digestion and promotes a healthy gut.",
        ImmuneSupport: "The vitamins and minerals in sunflower microgreens support a healthy immune system and overall health.",
        BoneHealth: "The calcium and magnesium in sunflower microgreens contribute to strong bones and teeth.",
        HeartHealth: "The potassium content helps regulate blood pressure, while the antioxidants support cardiovascular health.",
        SkinHealth: "The vitamin E in sunflower microgreens is beneficial for skin health, helping to protect and repair skin cells.",
        EnergyBoost: "The B vitamins in sunflower microgreens play a key role in energy metabolism, helping to convert food into energy efficiently.",
      },
      price: "5",
      status: "available"
    },
    {
      name: "Wheat Grass",
      description: "Wheatgrass microgreens are young shoots of the wheat plant (Triticum aestivum), typically harvested when they are about 7-10 days old. Known for their vibrant green color and mild, sweet taste, wheatgrass microgreens are often juiced or added to smoothies but can also be incorporated into various other dishes.",
      meals: {
        JuicesAndSmoothies: "Blend wheatgrass microgreens into green juices or smoothies for a nutritional boost. Their mild flavor pairs well with fruits and other greens.",
        Salads: "Mix wheatgrass microgreens with other leafy greens in salads for added nutrition and a fresh taste.",
        Soups: "Add chopped wheatgrass microgreens to soups just before serving to retain their nutrients and add a mild, grassy flavor.",
        SandwichesAndWraps: "Use wheatgrass microgreens as a fresh, crunchy layer in sandwiches, wraps, and burgers.",
        Pesto: "Blend wheatgrass microgreens with basil, nuts, garlic, and olive oil to make a nutrient-dense pesto.",
        DipsAndSpreads: "Mix wheatgrass microgreens into hummus, guacamole, or other dips for a nutritional upgrade.",
        GrainBowls: "Top grain bowls, such as quinoa or rice dishes, with a handful of wheatgrass microgreens.",
        Garnishes: "Use wheatgrass microgreens as a garnish for a variety of dishes, from roasted vegetables to grilled meats.",
      },
      health: {
        RichInNutrients: "Wheatgrass microgreens are loaded with vitamins A, C, E, and K, as well as essential minerals like calcium, magnesium, iron, and potassium.",
        AntioxidantProperties: "High in antioxidants, wheatgrass microgreens help combat oxidative stress and may reduce the risk of chronic diseases.",
        Detoxification: "Wheatgrass is known for its detoxifying properties, particularly in supporting liver function and helping to cleanse the blood.",
        BoostsImmunity: "The vitamins and antioxidants in wheatgrass microgreens support a healthy immune system.",
        DigestiveHealth: "Wheatgrass contains enzymes that aid in digestion and promote a healthy gut microbiome.",
        EnergyLevels: "The nutrients in wheatgrass microgreens can help boost energy levels and improve overall vitality.",
        AlkalizingEffect: "Wheatgrass has an alkalizing effect on the body, which can help balance pH levels and reduce acidity.",
        AntiInflammatory: "The compounds in wheatgrass have anti-inflammatory properties, which can help reduce inflammation in the body.",
        SkinHealth: "The high levels of vitamins and antioxidants in wheatgrass microgreens are beneficial for skin health, helping to protect and repair skin cells.",
        CholesterolAndBloodPressure: "Some studies suggest that wheatgrass can help lower cholesterol levels and regulate blood pressure, promoting heart health.",
      },
      price: "5",
      status: "available"
    },
    {
      name: "Salad Mix Variety",
      description: "Salad mix variety microgreens are a blend of different young seedlings typically harvested when they are about 1-3 inches tall. This mix can include microgreens such as arugula, radish, mustard, kale, and mizuna. Each type of microgreen in the mix adds unique flavors, textures, and nutritional benefits, making salad mix variety microgreens a versatile and nutrient-dense option.",
      meals: {
        Salads: "Use salad mix variety microgreens as the base or a component of mixed salads for diverse flavors and textures.",
        SandwichesAndWraps: "Add them to sandwiches, wraps, and burgers for a fresh, crunchy layer.",
        Smoothies: "Blend a small amount into green smoothies for an extra dose of nutrients without overwhelming the flavor.",
        Soups: "Garnish soups with salad mix microgreens just before serving to add freshness and a mix of flavors.",
        StirFries: "Toss them into stir-fries at the end of cooking to maintain their crisp texture and nutritional value.",
        OmelettesAndScrambledEggs: "Mix salad mix microgreens into omelettes or scrambled eggs for a nutritious and flavorful addition.",
        BowlsAndGrainDishes: "Top grain bowls, quinoa dishes, or rice dishes with a sprinkle of salad mix microgreens.",
        PastaAndNoodles: "Use them as a garnish for pasta dishes or noodle bowls to enhance flavor and nutrition.",
        TacosAndBurritos: "Sprinkle them on tacos or burritos for added texture and taste.",
        Pizzas: "Add a handful of salad mix microgreens to pizzas just before serving for a fresh, peppery kick.",
      },
      health: {
        NutrientRich: "Salad mix microgreens are packed with vitamins A, C, E, and K, as well as essential minerals like calcium, magnesium, potassium, and iron.",
        Antioxidants: "These microgreens are high in antioxidants, which help combat oxidative stress and reduce the risk of chronic diseases.",
        AntiInflammatory: "The compounds in microgreens have anti-inflammatory properties that can help reduce inflammation in the body.",
        DigestiveHealth: "The fiber in salad mix microgreens aids in digestion and promotes a healthy gut.",
        ImmuneSupport: "High levels of vitamins and minerals support immune function and overall health.",
        Detoxification: "Certain microgreens, like radish and arugula, support liver function and aid in the detoxification process.",
        HeartHealth: "The potassium and magnesium in salad mix microgreens help regulate blood pressure and support cardiovascular health.",
        BoneHealth: "Calcium and vitamin K in salad mix microgreens are essential for maintaining strong bones and preventing osteoporosis.",
        EyeHealth: "Microgreens like kale are rich in lutein and zeaxanthin, which are beneficial for eye health.",
        SkinHealth: "The vitamins and antioxidants in salad mix microgreens help protect and repair skin cells, promoting healthy skin.",
      },
      price: "5",
      status: "available"
    },
  ];

  const products = items.map((item, index) => {
    return (
      <li key={index}><Card item={item} /></li>
    );
  });

  return (
    <div className="App">
      <div className='app-container'>
        {/* Add logo here */}
        <ul className='products-container'>{products}</ul>
        <nav>
          <ul class="nav-icons">
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="story.html"><i class="fa-solid fa-book-open"></i></a></li>
            <li><a href="contact.html"><i class="fa-solid fa-envelope"></i></a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default App;