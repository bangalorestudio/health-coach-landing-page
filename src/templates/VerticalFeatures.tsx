import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = () => (
  <Section
    title="Here's the deal, in not too many words"
    description="We are a team of doctors, nutritionists and wellness practitioners who have spent decades helping hundreds of clients fundamentally change the way they eat, move, and live. We've taken our proven methods and created a program that is easy to follow."
  >
    <VerticalFeatureRow
      title="Weekly Meal Plans"
      description="We'll tell you what to buy at your weekly grocery store run. Designed to be light on the wallet, and easy to prepare, our meal plans are perfect for busy people. "
      image="/assets/images/mealplan.png"
      imageAlt="Weekly meal plans"
    />
    <VerticalFeatureRow
      title="Guided Yoga and Meditation"
      description="This is not a weight loss program. It's a lifestyle transformation program. We'll help you build healthy habits that will last a lifetime. Losing weight is a happy side effect."
      image="/assets/images/yoga.svg"
      imageAlt="guided exercises"
      reverse
    />
    <VerticalFeatureRow
      title="Tailored Insights at Weekly Check-Ins"
      description="Through our years of experience, we've found that successful outcomes are heavily influenced by having a high degree of accountability. You'll meet with our in-house nutritional advisor at Stone Ridge Family Medicine."
      image="/assets/images/checkins.png"
      imageAlt="Weekly Check-Ins"
    />
  </Section>
);
export { VerticalFeatures };
