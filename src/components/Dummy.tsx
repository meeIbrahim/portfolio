// DummySection.tsx

interface DummySectionProps {
  title: string;
  content: string;
}

const DummySection = ({ title, content }: DummySectionProps) => {
  return (
    <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {content}
          </p>
        </div>
        </div>
    </section>
  );
};

export default DummySection;
