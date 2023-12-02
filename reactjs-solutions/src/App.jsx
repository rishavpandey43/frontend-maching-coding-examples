import { routeList } from "./routeConfig";
import ChallengeCard from "./components/ChallengeCard";

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">React JS Solutions</h1>
      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {routeList
          .filter((route) => route.id)
          .map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              path={challenge.path}
              title={challenge.title}
              description={challenge.description}
              difficulty={challenge.difficulty}
              timeEstimate={challenge.timeEstimate}
            />
          ))}
      </div>
    </main>
  );
}

export default App;
