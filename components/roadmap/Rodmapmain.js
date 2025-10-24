import Roadmap from '../components/Roadmap';

export default function Roadmapmain() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-center text-5xl font-bold text-green-700 mt-12">Welcome to the Recycling Project</h1>
      <p className="text-center text-xl text-gray-700 mt-4">
        Our journey to transforming waste into biogas and biomass.
      </p>
      <Roadmap />
    </div>
  );
}