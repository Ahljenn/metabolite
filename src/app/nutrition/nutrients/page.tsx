import UnderConstruction from '@/app/components/ui/UnderConstruction';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Nutrients',
};

const Nutrients = () => {
  return (
    <section className={`flex flex-col items-center justify-between `}>
      <h1 className="text-lg sm:text-3xl font-bold mb-4 mt-10 text-center">
        Essential Nutrients and Vitamins Guide
      </h1>

      <main className="p-12 container mx-auto px-4 py-8 max-w-screen-lg">
        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">1. Vitamin A (Retinol)</h2>
          <p>
            Impact: Essential for good vision, especially in low light. Supports immune function and
            skin health. Plays a role in cell differentiation and growth.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Carrots, sweet potatoes, kale, spinach, liver, eggs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">2. Vitamin B Complex</h2>
          <p>
            Impact: B1 (Thiamine) helps convert food into energy. B2 (Riboflavin) supports growth,
            red blood cell production. B3 (Niacin) aids digestion and promotes healthy skin. B5
            (Pantothenic Acid) assists in the synthesis of fatty acids. B6 (Pyridoxine) helps with
            brain development and function. B7 (Biotin) supports metabolism and hair/skin health. B9
            (Folate) crucial for fetal development and cell growth. B12 (Cobalamin) supports nerve
            function and DNA synthesis.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Whole grains, meat, fish, dairy, leafy greens, eggs, nuts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">3. Vitamin C (Ascorbic Acid)</h2>
          <p>
            Impact: Essential for collagen production (skin, blood vessels, bones). Acts as a
            powerful antioxidant, protecting cells from damage. Supports the immune system.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Citrus fruits (oranges, lemons), strawberries, bell peppers, broccoli.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">4. Vitamin D (Calciferol)</h2>
          <p>
            Impact: Promotes calcium absorption, crucial for bone health. Supports immune function.
            May play a role in mood regulation.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Sunlight exposure, fatty fish (salmon, mackerel), fortified dairy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">5. Vitamin E (Tocopherol)</h2>
          <p>
            Impact: Acts as a powerful antioxidant, protecting cells from damage. Supports immune
            function. May promote healthy skin.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Nuts (almonds, sunflower seeds), spinach, broccoli, wheat germ.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">6. Vitamin K (Phylloquinone)</h2>
          <p>Impact: Essential for blood clotting. Supports bone health and metabolism.</p>
          <p className="text-metaPrimary font-semibold">
            Sources: Leafy greens (kale, spinach), broccoli, Brussels sprouts.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">7. Calcium</h2>
          <p>
            Impact: Crucial for bone and teeth health. Helps with muscle function, nerve
            transmission, and blood clotting.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Dairy products, dark leafy greens (kale, collard greens), fortified foods.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">8. Iron</h2>
          <p>
            Impact: Essential for oxygen transport in the blood. Supports cognitive function and
            energy production.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Red meat, poultry, fish, beans, lentils, spinach.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">9. Magnesium</h2>
          <p>
            Impact: Supports muscle and nerve function. Important for bone health and energy
            metabolism.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Nuts, seeds, leafy greens, whole grains, fish.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">10. Potassium</h2>
          <p>Impact: Regulates blood pressure. Essential for muscle and nerve function.</p>
          <p className="text-metaPrimary font-semibold">
            Sources: Bananas, oranges, potatoes, tomatoes, beans.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">11. Zinc</h2>
          <p>
            Impact: Supports immune function and wound healing. Important for DNA synthesis and
            taste perception.
          </p>
          <p className="text-metaPrimary font-semibold">
            Sources: Red meat, poultry, seafood, beans, nuts, whole grains.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-md sm:text-2xl font-bold mb-2">12. Omega-3 Fatty Acids</h2>
          <p>Impact: Essential for heart health and brain function. May reduce inflammation.</p>
          <p className="text-metaPrimary font-semibold">
            Sources: Fatty fish (salmon, mackerel), flaxseeds, chia seeds, walnuts.
          </p>
        </section>
      </main>
    </section>
  );
};

export default Nutrients;
