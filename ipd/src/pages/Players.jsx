import { useState } from "react";
import styles from "../styles/Players.module.css";

const playerData = [
  {
    name: "Tit-for-Tat",
    description:
      "Neither angel nor demon, this enigmatic character embodies the perfect balance of justice and fairness. They greet every encounter with open hands, offering trust and cooperation. Yet, they are no stranger to retribution. Any betrayal is met with swift and equal retaliation, not out of malice, but as a lesson in accountability. Their dual nature symbolizes fairness—rewarding kindness and punishing treachery in equal measure. They are a mirror, reflecting the choices of others back at them.",
    image: "/assets/titftat.jpg",
  },
  {
    name: "Spiteful Memory",
    description:
      "Forged in a world where betrayal is inevitable, Mnemosyne remembers every slight and repays it without hesitation. Calculating and composed, this arbiter thrives on strategy, wielding memory as both shield and sword. Forgiveness is a weakness Mnemosyne refuses to entertain—cooperation is granted only until deceit emerges. Once crossed, retribution is swift, cold, and precise. Mnemosyne stands as a relentless force, ensuring that treachery never goes unanswered, embodying the delicate balance between trust and vengeance.",
    image: "/assets/spiteful.jpg",
  },
  {
    name: "QCD (Quantum Cooperate Defect)",
    description:
      "A being from another dimension, QCD exists in a perpetual state of uncertainty. Its form flickers between cooperation and defection, embodying the concept of quantum superposition. No one can predict its actions—not even QCD itself—making it a force of chaos and brilliance. Its motives are incomprehensible, its presence both mesmerizing and unsettling. Some call it a glitch, others a genius, but one thing is certain: QCD plays by rules we cannot understand.",
    image: "/assets/QCD.jpg",
  },
  {
    name: "Always Cooperate",
    description:
      "Born in a world where mistrust and betrayal were rampant, this character chose a different path: unwavering kindness. They believe that cooperation is the only way to achieve a better future, even if it means risking personal loss. Their calm demeanor and unshakable optimism inspire those around them to strive for harmony. In every interaction, they extend their hand in trust, even to the most treacherous of foes, hoping to build a bridge where others see walls.",
    image: "/assets/cop.jpg",
  },
  {
    name: "Always Defect",
    description:
      "Cunning and self-serving, this character thrives on exploiting others for personal gain. They view the world as a battlefield where only the strongest and most ruthless survive. No amount of pleading or persuasion will change their mind—betrayal is their creed, and victory is all that matters. Whether driven by greed, a tragic past, or a cold calculation, their unyielding desire for self-preservation has made them both feared and respected.",
    image: "/assets/defect.jpg",
  },
  {
    name: "Grudger",
    description:
      "Beneath their calm and cooperative exterior lies a soul scarred by betrayal. Once a staunch believer in mutual trust, they were deeply wronged by those they trusted most. Now, they are cautious and forgiving—once. Cross them, however, and they become an unrelenting force of vengeance. They carry the weight of every betrayal like a shield, using it as a reminder to never be fooled again. Trust is a fragile gift, and for this character, it’s only given once.",
    image: "/assets/grudger.jpg",
  },
  {
    name: "Tideman-Chieruzzi",
    description:
      "Calculated and composed, this character approaches every interaction like a game. They are always thinking several moves ahead, crafting strategies that blend offense and defense in perfect harmony. A veteran of many battles, they have honed their skills to perfection, analyzing every detail to outwit their opponents. Their calm and tactical demeanor hides a sharp mind that adapts to any situation. To face them is to face an opponent who is always one step ahead.",
    image: "/assets/tideman.jpg",
  },
  {
    name: "Random",
    description:
      "A whimsical and unpredictable force, this character thrives on chaos and uncertainty. They laugh in the face of logic, playing by no rules but their own. Every decision they make feels like the roll of a dice, leaving allies and enemies alike confused and on edge. Is their randomness a clever ruse, or do they truly operate without a plan? No one knows, and that’s precisely what makes them so dangerous. They are the wild card, the joker in the deck, and the chaos that shakes the game.",
    image: "/assets/random.jpg",
  },
  {
    name: "Davis",
    description:
      "A beacon of trust and stability, this character stands as a loyal ally in a world of shifting alliances. Their every move reflects an unwavering commitment to cooperation, earning respect from friends and foes alike. They embody the spirit of teamwork, building bridges where others see walls. Steady and composed, they inspire confidence, proving that unity and reliability can be a strategy's greatest strengths.",
    image: "/assets/davis.jpg",
  },
  {
    name: "Graaskamp",
    description:
      "A master of foresight and analysis, this character sees the game in ways others cannot. Every move is calculated, every possibility explored. With tools that bring clarity to the chaos, they are always one step ahead, navigating the unpredictable with precision. Their strategic brilliance leaves opponents scrambling to catch up, while their calm confidence assures allies of success.",
    image: "/assets/grasskamp.jpg",
  },
  {
    name: "FirstByDowning",
    description:
      "A wise and empathetic presence, this character thrives on adaptation and learning. They embrace change, evolving with every challenge to build stronger alliances. Thoughtful yet resilient, they balance kindness with strategy, making decisions that reflect the bigger picture. Their ability to adapt to the unexpected ensures they remain a formidable force, embodying the harmony of intelligence and compassion.",
    image: "/assets/fbd.jpg",
  },
  {
    name: "Feld",
    description:
      "A bold and unpredictable force, this character thrives on seizing opportunities others overlook. Their every move feels like a gamble, yet beneath their confident exterior lies a mind skilled in weighing risks and rewards. Quick to adapt and unafraid of taking chances, they exude an aura of daring ambition. Whether by luck or calculated brilliance, they always seem to land on their feet, leaving rivals scrambling to catch up.",
    image: "/assets/feld.jpg",
  },
  {
    name: "Joss",
    description:
      "A master of deception and strategy, this character moves in the shadows, leaving allies and enemies alike guessing. Their enigmatic demeanor hides a mind brimming with cunning plans, every action a carefully chosen piece in a larger game. Mysterious and elusive, they keep their opponents off-balance, turning unpredictability into their greatest weapon. They are the strategist who thrives on chaos, always keeping others wondering what they’ll do next.",
    image: "/assets/joss.jpg",
  },
  {
    name: "Tullock",
    description:
      "A bastion of strength and stability, this character is the embodiment of caution and foresight. Their every move is calculated to protect and endure, outlasting their opponents through sheer resilience. Unyielding in the face of conflict, they stand as a guardian of their strategy, adapting only when absolutely necessary. Their presence is a reminder that sometimes the strongest offense is a well-planned defense.",
    image: "/assets/tullock.jpg",
  },
];

export default function Players() {
  const [selectedPlayer, setSelectedPlayer] = useState(playerData[0]);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.flexContainer}>
        <div className={styles.playerListScrollable}>
          {playerData.map((player, index) => (
            <button
              key={index}
              onClick={() => setSelectedPlayer(player)}
              className={styles.playerButton}
            >
              {player.name}
            </button>
          ))}
        </div>

        {/* Right Strategy Details */}
        <div className={styles.playerDetailsStatic}>
          <div className={styles.playerDetailsContent}>
            {selectedPlayer.image && (
              <img
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                className={styles.playerImage}
              />
            )}
            <h2>{selectedPlayer.name}</h2>
            <p>{selectedPlayer.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
