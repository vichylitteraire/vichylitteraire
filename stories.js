// 1. БАЗА ДАННЫХ ИСТОРИЙ
const stories = [
    {
        title: { fr: "CONFESSION", en: "CONFESSION" },
        content: { 
            fr: "Combien de jours ont passé… combien d’années… je ne le sais pas, et je ne suis même pas sûr de vouloir le savoir. Le temps ne bouge pas ici : il s’est figé, dissous dans cette obscurité sans issue, emplie d’une douleur qui ne s’apaise pas un seul instant. Je suis mort pour ce monde-là, et vivant dans celui-ci. Mort pour tous, sauf pour toi. Rien que pour toi, j’existe encore dans cette agonie sans fin, dans cette malédiction devenue mon unique forme d’être. \n\n Je paie pour tout. Pour mes paroles, mes actes, mes pensées. Pour celui que j’étais, pour celui que je ne suis pas devenu. Pour tout le mal que j’ai causé, pour tout ce que je n’ai pas réparé. Chaque seconde est une répétition interminable de douleur, de châtiment, de tourment, et il n’y a ni pardon ni délivrance. Personne n’entend mes cris. Personne ne les entendra jamais. Je suis enterré profondément dans une terre froide et humide, où il n’y a ni lumière ni air, seulement l’étroitesse, l’obscurité écrasante et le silence.\n\nJe ne sais pas s’il reste quelque chose de mon corps. Je ne sens ni mes bras, ni mes jambes, ni mon visage ; seulement une douleur traversante, dévorante, absolue. Je sens les vers s’enfoncer avec avidité dans la chair, je sens le feu consumer mes os. C’est insupportable. C’est plus que ce que quoi que ce soit pourrait endurer. Et pourtant, je l’endure. Je suis mort, mais je ne meurs pas. \n\n Devant mes yeux — si l’on peut encore appeler cela des yeux — défilent sans cesse des images. Tout le mal que j’ai fait, tout ce que j’ai dit, tout ce que j’ai refusé de voir de mon vivant, se tient maintenant devant moi, net, clair, impitoyable. Je me demande : qui étais-je ? Y avait-il en moi ne serait-ce qu’une lueur de bonté ? Y a-t-il eu un seul acte pour lequel on aurait pu me plaindre ? Mais il n’y a pas de réponse. Je ne me souviens pas. Et dans ce silence où il n’y a ni son ni souffle, je n’entends qu’un verdict : ceci est mon châtiment.\n\nÊtre allongé sans bouger, sentir le corps pourrir, sentir l’odeur de la décomposition envahir tout autour, ne rien voir ni entendre, hormis le froissement de créatures répugnantes rampant sur les restes de la chair qui fut jadis la mienne. Je me souviens de mon apparence, de ma vie, de mes rires… et je m’en souviens uniquement pour comprendre à quel point je suis désormais loin de moi-même. Pas une seconde de repos. Pas une goutte d’oubli. Rien que la douleur. Rien que l’enfer.\n\nMais au cœur de ce cauchemar, il y a quelqu’un. Il y a toi. Celle dont je suis encore capable d’entendre les pas, malgré l’épaisseur de la terre qui nous sépare. Celle dont les larmes traversent le sol et, telles de l’eau bénite, apaisent le feu qui me déchire. Je ne sais pas comment cela est possible, mais chaque fois que tu viens, je sens la douleur reculer. Tes prières, tes paroles, même ton silence — tout cela me remplit d’une légèreté que j’avais presque oubliée.\n\nTu es mon dernier fil. Tu es mon apaisement. Et pourtant, seulement pour un temps. C’est peut-être cela aussi une part du châtiment. Dès que tu t’en vas, dès que le bruit de tes pas se dissout au loin, je replonge dans l’oubli. Je t’oublie. Ton visage, ton nom, ta voix. Alors l’obscurité s’abat sur moi avec une force nouvelle, et je crie de nouveau, comme la première fois. Je crie jusqu’à entendre ces pas encore, jusqu’à me souvenir de celle qui m’aime malgré tout. Celle qui allège mes souffrances.\n\nJe crie jusqu’à ce que revienne celle pour qui je suis encore en vie.", 
            en: "How many days have passed… how many years… I don’t know, and I’m not sure I even want to know. Time does not move here; it has frozen, dissolved into this hopeless darkness, filled with pain that never subsides for a single moment. I am dead to that world, and alive in this one. Dead to everyone except you. Only for you do I still exist in this endless agony, in this curse that has become my only form of being.\n\nI pay for everything. For my words, my actions, my thoughts. For who I was, and who I never became. For all the harm I caused, for all that I failed to make right. Every second is an unending repetition of pain, punishment, torment, and there is neither forgiveness nor release. No one hears my screams. No one ever will. I am buried deep in cold, damp earth, where there is no light and no air—only confinement, crushing darkness, and silence.\n\nI do not know whether anything remains of my body. I feel no arms, no legs, no face—only a piercing, all-consuming pain. I feel worms gnawing greedily into flesh; I feel fire burning my bones. It is unbearable. It is more than anything could endure. And yet, for some reason, I endure it. I am dead, but I do not die.\n\nBefore my eyes—if they can still be called eyes—images pass again and again. All the evil I have done, all the words I spoke, all that I turned away from in life now stands before me clearly, sharply, mercilessly. I ask myself—who was I? Was there even a glimmer of goodness in me? Was there a single deed for which I might have been pitied? But there is no answer. I do not remember. And in this silence, where there is no sound and no breath, I hear only the sentence: this is my punishment.\n\nTo lie motionless, to feel the body rot, to sense the stench of decay filling everything around me; to see and hear nothing except the rustling of vile creatures crawling over the remnants of flesh that once were mine. I remember how I looked, how I lived, how I laughed… and I remember only to understand how far I am now from myself. Not a second of rest. Not a drop of oblivion. Only pain. Only hell.\n\nBut within this nightmare, there is someone. There is you. The one whose footsteps I am still able to hear, despite the thickness of earth that separates us. The one whose tears seep through the soil and, like holy water, extinguish the fire that tears me apart. I do not know how this is possible, but every time you come, I feel the pain retreat. Your prayers, your words, even your silence—all of it fills me with a lightness I had almost forgotten.\n\nYou are my last thread. You are my solace. And yet, only for a short while. Perhaps this, too, is part of the punishment. As soon as you leave, as soon as the sound of your footsteps fades into the distance, I fall back into oblivion. I forget you. Your face, your name, your voice. And then the darkness covers me with renewed force, and I scream again, as I did the first time. I scream until I hear those footsteps once more, until I remember the one who loves me despite everything. The one who eases my suffering.\n\nI scream until she returns—the one for whom I am still alive." 
        },
        author: "Imani"
    },

    {
        title: { fr: "LILY", en: "LILY" },
        content: { 
            fr: `« — Ça fait longtemps que je voulais te dire... Non, pas comme ça. Lily, ça fait une éternité qu’on est ensemble... Fait chier, non. Hmm... Lily, ce que je ressens pour toi... c’est plus grand que l’univers. Je t’aime... Mon Dieu, c’est tellement ridicule ! »
            
Cela durait depuis vingt minutes. Derrière le mur, la voix tombait parfois dans un murmure, avant de s’emporter dans un grognement agacé — il changeait les mots, déplaçait les accents et s'en voulait à nouveau pour sa maladresse. Savait-il que dans cette nouvelle maison, les murs étaient fins comme du papier à cigarette ? J'ai souri malgré moi. J'avais envie de lui dire que ces hésitations et ses « pas comme ça » désespérés étaient la vérité la plus pure que Lily puisse jamais entendre.`,
            en: `"— I’ve wanted to tell you for a long time... No, not like that. Lily, we’ve been together for an eternity... Damn it, no. Hmm... Lily, my feelings for you—they’re bigger than the universe. I love you... God, that sounds so stupid!"
            
            This went on for twenty minutes. The voice behind the wall would drop to a whisper, then break into a frustrated grumble—he kept changing the words, shifting the emphasis, and scolding himself again for being so clumsy. Did he know that in this new house, the walls were as thin as tissue paper? I smiled in spite of myself. I wanted to tell him that those stumbles and his desperate "not like that" were the purest truth Lily could ever hope to hear.`
        },
        author: "Imani"
    },

    {
        title: { fr: "La réceptacle", en: "The vessel" },
        content: { 
            fr: `L'idée est née un dimanche soir, entre une pizza froide et le silence assourdissant de son appartement de sixième étage. Il a imprimé cinquante tracts. Pas de graphisme, juste du texte brut, en Helvetica, comme un constat de décès.

« Je loue mes oreilles. Je ne suis pas psy. Je ne donne pas de conseils. Je ne vous dirai pas que tout ira bien. Je prends juste votre vérité pour qu'elle ne vous étouffe plus. 20 euros l'heure. Payez avant, parlez après. »

Il pensait que c'était une blague, une expérience sociale pour occuper son vide. Mais le premier appel est tombé deux heures après avoir collé la première affiche sur un poteau devant la poste.
Une femme. Elle n'a pas dit « Allô ». 
Elle a juste demandé : « C'est vrai ? Vous prenez tout ?».
Thomas a avalé sa salive. « Tout. »

Elle est venue. Elle n'avait pas l'air d'une folle. Elle avait l'air d'une femme qui aurait pu être votre voisine, celle qui achète son pain à 8h05 et qui sourit poliment au facteur. Elle s'est assise sur la seule chaise droite du studio de Thomas. Elle n'a pas enlevé son manteau. Elle a posé un billet de vingt euros sur la table basse, l'a lissé du bout des doigts, puis elle a commencé.
Elle n'a pas raconté une histoire. Elle a déversé un poison. Elle a parlé d'une haine froide pour ses propres enfants, d'une envie de partir sans se retourner, de la sensation de ses mains qui se serrent chaque soir autour de son propre cou pour s'empêcher de hurler. Thomas écoutait. Au début, il essayait d'analyser, de comprendre les causes. Puis, il a arrêté. Il a senti le poids. C'était une pression physique, comme si l'air de la pièce devenait plus dense, plus lourd à respirer.

Quand l'heure fut finie, elle s'est levée. Son visage n'était plus le même. Les rides semblaient s'être lissées. Elle était légère, presque aérienne. En partant, elle a dit : « Merci. C'est plus calme chez moi, maintenant que c'est chez vous ».
Et c'est là que Thomas a compris l'arnaque. Il n'était pas un confident. Il était une décharge publique.

Les semaines suivantes ont été une plongée dans l'égout humain. Un homme est venu lui avouer qu'il avait laissé son meilleur ami purger une peine de prison à sa place il y a dix ans. Une jeune fille lui a raconté comment elle sabotait systématiquement la vie de tous ceux qui l'aimaient, juste pour voir jusqu'où leur patience pouvait aller. Un vieillard lui a décrit, avec une précision chirurgicale, comment il avait noyé les chiots de sa chienne parce qu'il ne voulait pas s'en occuper.

Thomas ne dormait plus. Chaque fois qu'il fermait les yeux, les voix revenaient. Ce n'étaient pas ses souvenirs, mais ceux des autres. Il se sentait sale, contaminé. Il avait l'impression d'avoir une peau faite de couches de secrets moisis.
Le pire, c'était l'argent. Ces billets de vingt euros lui brûlaient les doigts. C'était l'argent du soulagement, le prix payé pour lui refiler la merde et repartir le cœur léger.

Un soir, un type est arrivé. Un type ordinaire. Il s'est assis et a dit : « J'ai tué quelqu'un. Pas exprès. Mais je n'ai pas appelé la police. J'ai enterré le truc. Et depuis, je n'entends plus rien d'autre que le bruit de la terre qui tombe ».
Thomas a regardé l'homme. Il a vu sa propre fin. Il a réalisé que s'il acceptait ce secret-là, il ne pourrait plus jamais ressortir de ce studio. Ce serait le secret de trop, celui qui ferait déborder le vase et briserait le verre.

Il s'est levé. Il n'a pas pris le billet.
— Partez, a-t-il dit d'une voix rauque.
— Mais j'ai payé... enfin, je vais payer double !
— Partez. Je suis plein. Il n'y a plus de place.

L'homme est parti, furieux. Thomas a pris tous les tracts qui lui restaient, il a pris son briquet et il a tout brûlé dans l'évier. Il a regardé la fumée noire monter vers le plafond. Il a compris que pour survivre, il devait redevenir sourd. Il est descendu dans la rue, il a marché jusqu'au pont, et il a regardé l'eau couler. L'eau ne garde rien.
Elle emporte tout, elle nettoie, elle ne juge pas, mais elle ne se souvient pas non plus.
Désormais, Thomas ne louerait plus ses oreilles. Il allait apprendre à parler seul, dans le vent, pour vider enfin ce réceptacle qu'il était devenu. Il allait redevenir un homme sans histoires. Et c'était le plus beau cadeau qu'il pouvait s'offrir.`,
            en: `The idea was born on a Sunday evening, somewhere between a cold pizza and the deafening silence of his sixth-floor apartment. He printed fifty flyers. No graphics, just raw text in Helvetica, looking like a death certificate:

“Professional Listener. I am not a shrink. I don’t give advice. I won’t tell you everything will be fine. I simply take your truth so it no longer suffocates you. 20 euros an hour. Pay first, talk after.”

He thought it was a joke, a social experiment to fill his own emptiness. But the first call came two hours after he’d taped the first flyer to a pole outside the post office.
A woman. She didn’t say “Hello.” She simply asked: “Is it true? Do you take everything?”
Thomas swallowed hard. “Everything.”

She came. She didn’t look crazy. She looked like a woman who could have been your neighbor—the kind who buys her bread at 8:05 AM and smiles politely at the mailman. She sat on the only straight-backed chair in Thomas’s studio. She didn’t take off her coat. She placed a twenty-euro bill on the coffee table, smoothed it out with her fingertips, and began.

She didn’t tell a story. She poured out poison. She spoke of a cold hatred for her own children, of a longing to leave without looking back, of the sensation of her hands tightening around her own neck every night to keep from screaming. Thomas listened. At first, he tried to analyze, to search for causes. Then, he stopped. He felt the weight. It was a physical pressure, as if the air in the room were becoming denser, heavier to breathe.

When the hour was up, she stood. Her face had changed. The wrinkles seemed to have smoothed out. She was light, almost ethereal. As she left, she said: “Thank you. It’s quieter at my place now that it’s at yours.”

And that was when Thomas understood the scam. He wasn’t a confidant. He was a public landfill.
The following weeks were a plunge into the human sewer. A man came to confess that he had let his best friend serve a prison sentence in his place ten years ago. A young girl told him how she systematically sabotaged the lives of everyone who loved her, just to see how far their patience would go. An old man described, with surgical precision, how he had drowned his dog’s puppies because he didn’t want to deal with them.

Thomas stopped sleeping. Every time he closed his eyes, the voices returned. They weren’t his memories, but those of others. He felt dirty, contaminated. He felt like his skin was made of layers of moldy secrets. The worst part was the money. Those twenty-euro bills burned his fingers. It was the money of relief—the price paid to dump the sh*t on him and walk away with a light heart.

One evening, a guy showed up. An ordinary guy. He sat down and said: “I killed someone. Not on purpose. But I didn’t call the police. I buried the thing. And since then, I hear nothing but the sound of dirt falling.”

Thomas looked at the man. He saw his own end. He realized that if he accepted this secret, he would never be able to leave that studio again. It would be the secret too many, the one that would make the vessel overflow and shatter the glass.

He stood up. He didn’t take the bill.
“Leave,” he said, his voice raspy.
“But I paid... I’ll pay double!”
“Leave. I’m full. There’s no more room.”

The man left, furious. Thomas took all the flyers he had left, took his lighter, and burned them all in the sink. He watched the black smoke rise toward the ceiling.

He understood that to survive, he had to become deaf again. He went down to the street, walked to the bridge, and watched the water flow. Water keeps nothing. It carries everything away, it cleanses, it doesn't judge, but it doesn't remember either.
From now on, Thomas would no longer rent out his ears. He would learn to talk to himself, in the wind, to finally empty the vessel he had become. He would become a man without stories again. And it was the most beautiful gift he could give himself.`
        },
        author: "Imani"
    },
