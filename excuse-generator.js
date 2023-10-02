const buttonGenerate = document.getElementById("generateExcuse");
const theExcuse = document.getElementById("randomExcuse");

buttonGenerate.addEventListener("click", function () {
  let newExcuse = generateExcuse();
  theExcuse.textContent = newExcuse;
});

function generateExcuse() {
  const excusesPart1 = [
    "Mi unicornio mascota",
    "Un loro parlante",
    "Elvis Presley",
    "El Monstruo del Lago Ness",
    "Un hámster viajero en el tiempo",
    "Una tortuga ninja",
    "Un simpático extraterrestre",
    "El fantasma de Abraham Lincoln",
    "Una horda de zombis",
    "Papá Noel",
    "La receta de galletas de mi abuela",
    "Una varita mágica",
    "Un mayordomo robot",
    "Una manada de unicornios galopantes",
    "Un pirata cantante",
    "Un enjambre de libélulas lanzallamas",
    "Un equipo de gatitos superhéroes",
    "Un grupo de pingüinos bailarines",
    "El Ratoncito Pérez",
    "Un vampiro simpático",
    "La olla de oro de un duende",
    "Un escuadrón de zombis que bailan disco",
    "Una pandilla de lemmings traviesos",
    "Una colonia de hormigas cantantes",
    "Una banda de ositos de goma en una banda de música",
    "Un equipo de ardillas acrobáticas",
    "Un desfile de jirafas patinadoras",
    "Una convención de físicos viajeros en el tiempo",
    "Un grupo de robots breakdancers",
    "Un flash mob de ninjas invisibles",
    "Un comité de magos que leen la mente",
    "Un grupo de vaqueros teletransportadores",
    "Un pelotón de delfines superinteligentes",
    "Un grupo de canguros surferos",
    "Una bandada de flamencos con mochilas propulsoras",
    "Una horda de zombis que hacen claqué",
    "Un coro de sirenas cantantes",
    "Una sinfonía de elefantes musicales",
    "Una reunión de pingüinos que comen helado",
    "Un equipo de pulpos que hacen natación sincronizada",
    "Una tripulación de osos patinadores",
    "Una fiesta de alienígenas que hacen breakdance",
    "Una congregación de gatos amantes de la música disco",
    "Una banda de ardillas teletransportadoras",
    "Una pandilla de pandas que leen la mente",
    "Un grupo de pingüinos que viajan en el tiempo",
    "Un enjambre de luciérnagas bailarinas",
    "Una banda de pollos de rock and roll",
    "Un escuadrón de robots que hacen breakdance",
    "Una manada de canguros malabaristas",
    "Una colonia de hormigas cantantes",
    "Una banda de ositos de goma en una banda de música",
    "Un equipo de ardillas acrobáticas",
    "Un desfile de jirafas patinadoras",
    "Una convención de físicos viajeros en el tiempo",
    "Un grupo de robots breakdancers",
    "Un flash mob de ninjas invisibles",
    "Un comité de magos que leen la mente",
    "Un grupo de vaqueros teletransportadores",
  ];
  const excusesPart2 = [
    "y yo fuimos a la luna juntos",
    "y yo formamos una banda de rock",
    "y yo abrimos un parque temático",
    "y yo ganamos la Serie Mundial",
    "y yo descubrimos un planeta nuevo",
    "y yo nos convertimos en chefs mundialmente famosos",
    "y yo nos unimos al circo",
    "y yo construimos una nave espacial",
    "y yo resolvimos un misterio",
    "y yo ganamos una competencia de baile",
    "y yo viajamos en el tiempo",
    "y yo repelimos un apocalipsis zombi",
    "y yo nos convertimos en espías profesionales",
    "y yo protagonizamos una película exitosa",
    "y yo ganamos una medalla de oro en natación sincronizada",
    "y yo comenzamos una línea de moda",
    "y yo nos convertimos en superhéroes",
    "y yo navegamos alrededor del mundo",
    "y yo nos convertimos en magos",
    "y yo ganamos un Premio Nobel",
    "y yo construimos una máquina del tiempo",
    "y yo descubrimos un tesoro oculto",
    "y yo fundamos una fábrica de chocolate",
    "y yo domesticamos animales salvajes",
    "y yo resolvimos un caso frío",
    "y yo nos convertimos en astronautas famosos",
    "y yo comenzamos un circo para extraterrestres",
    "y yo viajamos al centro de la Tierra",
    "y yo nos convertimos en cazadores de tesoros profesionales",
    "y yo abrimos un restaurante en Marte",
    "y yo nos convertimos en surfistas campeones mundiales",
    "y yo ganamos un reality show de televisión",
    "y yo nos convertimos en agentes secretos",
    "y yo construimos un ejército de robots",
    "y yo resolvimos un acertijo de una civilización antigua",
    "y yo ganamos una competencia de cocina",
    "y yo nos embarcamos en una búsqueda de un artefacto mágico",
    "y yo nos convertimos en leyendas del rock and roll",
    "y yo descubrimos un portal a otra dimensión",
    "y yo fundamos una colonia en Marte",
    "y yo nos convertimos en arqueólogos viajeros en el tiempo",
    "y yo ganamos una maratón en la luna",
    "y yo comenzamos una agencia de detectives",
    "y yo nos convertimos en magos famosos",
    "y yo salvamos al mundo de una invasión alienígena",
    "y yo ganamos una competencia de baile contra robots",
    "y yo nos convertimos en exploradores legendarios",
    "y yo resolvimos el misterio del Triángulo de las Bermudas",
    "y yo comenzamos un circo para animales",
    "y yo construimos una montaña rusa en nuestro patio trasero",
    "y yo construimos un ejército de robots",
    "y yo resolvimos un acertijo de una civilización antigua",
    "y yo ganamos una competencia de cocina",
    "y yo nos embarcamos en una búsqueda de un artefacto mágico",
    "y yo nos convertimos en leyendas del rock and roll",
    "y yo descubrimos un portal a otra dimensión",
    "y yo fundamos una colonia en Marte",
    "y yo nos convertimos en arqueólogos viajeros en el tiempo",
    "y yo ganamos una maratón en la luna",
  ];
  const excusesPart3 = [
    "mientras cabalgaba en un pato de goma gigante",
    "con solo una cuchara y un pollo de goma.",
    "mientras hacía malabares con antorchas ardientes.",
    "mientras llevaba tutús rosados.",
    "en una ventisca de algodón de azúcar.",
    "en una tabla de surf hecha de espagueti.",
    "mientras hacía breakdance en una cuerda floja.",
    "en un globo aerostático en forma de plátano.",
    "mientras montaba en monociclo en una cuerda floja.",
    "mientras hacía paracaidismo en una piscina de pudín de chocolate.",
    "mientras hacía hula hoop con aros en llamas.",
    "en una biblioteca llena de libros que hablan.",
    "mientras hacía el moonwalk en la luna.",
    "mientras hacía claqué en un arco iris.",
    "en un baño de burbujas de chicle.",
    "mientras jugaba al ajedrez con un robot ajedrecista.",
    "en una habitación llena de conejos saltarines.",
    "mientras bailaba salsa con un frasco de salsa.",
    "en una patineta tirada por un guepardo.",
    "mientras hacía limbo bajo un rayo láser.",
    "en un laberinto hecho de hamburguesas gigantes.",
    "mientras esquiaba acuático en un río de chocolate.",
    "mientras caminaba en una cuerda floja sobre un pozo de crema batida.",
    "en una sala de baile con dinosaurios que bailan disco.",
    "mientras hacía snowboard en una montaña de malvaviscos.",
    "en un pogo stick hecho de bandas de goma.",
    "mientras jugaba al escondite con amigos invisibles.",
    "en una habitación llena de pinturas parlantes.",
    "mientras hacía puenting desde un platillo volador.",
    "mientras jugaba al rayuela en un arco iris.",
    "en una piscina llena de limonada espumosa.",
    "mientras patinaba sobre una acera de colores de arco iris.",
    "en una habitación con pisos hechos de trampolines.",
    "mientras jugaba al frisbee con un unicornio volador.",
    "en una pelea de almohadas con almohadas mullidas.",
    "mientras patinaba sobre hielo en un río de chocolate congelado.",
    "en una cuerda floja hecha de regaliz.",
    "mientras montaba en una montaña rusa hecha de espagueti.",
    "en una habitación con paredes hechas de burbujas gigantes.",
    "mientras surfeaba en una ola de crema batida.",
    "en una habitación con un suelo hecho de teclas de piano gigantes.",
    "mientras jugaba a las traes con rayos.",
    "en un juego gigante de ajedrez con piezas de ajedrez de la vida real.",
    "mientras hacía yoga con bandas de goma flexibles.",
    "en una habitación con globos flotantes.",
    "mientras jugaba al ajedrez con un loro que habla.",
    "en un trampolín hecho de malvavisco saltarín.",
    "mientras hacía yoga con bandas de goma flexibles.",
    "en una habitación con globos flotantes.",
    "mientras jugaba al ajedrez con un loro que habla.",
    "en un trampolín hecho de malvavisco saltarín.",
    "mientras hacía snowboard en una montaña de malvaviscos.",
    "en una habitación con paredes hechas de burbujas gigantes.",
    "mientras surfeaba en una ola de crema batida.",
    "en una habitación con un suelo hecho de teclas de piano gigantes.",
    "mientras jugaba a los dardos con rayos.",
  ];

  var randomPart1 =
    excusesPart1[Math.floor(Math.random() * excusesPart1.length)];
  var randomPart2 =
    excusesPart2[Math.floor(Math.random() * excusesPart2.length)];
  var randomPart3 =
    excusesPart3[Math.floor(Math.random() * excusesPart3.length)];

  let randomExcuse =
    "No te lo vas a creer, pero: " +
    randomPart1 +
    " " +
    randomPart2 +
    " " +
    randomPart3;
  return randomExcuse;
}
