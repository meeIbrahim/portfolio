// DummySection.tsx

interface DummySectionProps {
  title: string;
  content: string;
}

const DummySection = ({ title, content }: DummySectionProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <p className="text-lg">{content}</p>
      </div>
    </section>
  );
};

export default DummySection;
