var MatchGame = {};
var pairs = 0;

var cardDeck = [
  "<div class='1'><img src='./resources/images/1.jpg'></div>",

  "<div class='1'><h2>Roaring & Relaxed Twenties</h2> <p>The end of World War I brought a new sense of freedom and independence to women in the United States. Women began to strive to look younger and younger; beginning to wear looser fitting garments while hemlines rose to an unprecedented knee-length level. American men of the 1920s began to dress less formally than ever before. Men's shirts in the 1920s were often made of stripes in a mixture of colors, mainly pastel greens, blues, and yellows, contrasted with a white collar. Men abandoned suit lapels of the 1910s, opting instead for cuffed trousers, flannel jackets, and two-toned shoes for casual wear.</p></div>",

  "<div class='2'><img src='./resources/images/2.jpg'></div>",

  "<div class='2'><h2>Post-War Consumerism Fifties</h2> <p>The decade was marked by economic boom and a giant push towards consumerism. As men returned from war, woman were to be homemakers once again, focusing on the 'house-dress' of florals and uplifting patterns. Dior creates the first 'A-line' silhouette, a period of emphasis on the hour-glass shape.</p></div>",

  "<div class='3'><img src='./resources/images/3.jpg'></div>",

  "<div class='3'><h2>Counterculture Unisex Sixties</h2> <p>In the U.S., the 1960s was defined by the rise of counterculture movements that revolutionized social norms across the country. Youth culture during the 1960s rejected the emphasis on conformity that the preceding decade ingrained in society. Replacing distinct separations between the styles of clothing worn by men and women, the 1960s introduced a new phenomena: unisex clothing such as denim jeans and leather jackets that could be worn by everyone.</p></div>",

  "<div class='4'><img src='./resources/images/4.jpg'></div>",

  "<div class='4'><h2>Denim & Confidence Seventies</h2> <p>Unisex clothing became the norm by the early 1970s. With women entering the workforce more than ever before, pantsuits and daywear with a masculine edge were popularized among youth. Women also wore skirts in a variety of lengths, often opting for tightfitting mini skirts for everyday wear. Becoming a wardrobe staple in the 1970s, blue jeans were worn by men, women, and children across the country, coming in a variety of different styles.</p></div>",

  "<div class='5'><img src='./resources/images/5.jpg'></div>",

  "<div class='5'><h2>Anti-Fashion Ninties</h2> <p>Adults of the early 1990s wore relaxed fit jeans with plain T-shirts and knit sweaters. Comfort became the emphasis for Americans during the decade, rejecting the uncomfortable clothing trends of the previous decade. By 1992, grunge music reached high popularity, bringing with it a new fashion trend that would define the decade. Plaid flannel shirts, stonewashed jeans, and dark colors like maroon, gray, forest green, and brown dominated the decade.</p></div>",

  "<div class='6'><img src='./resources/images/6.jpg'> <p class='credit'>Breuer, Marcel. <em>Armchair.</em> 1925.</p></div>",

  "<div class='6'><h2>1919-1933: Bauhaus</h2> <p>The motivations behind the creation of the Bauhaus lay in anxieties about the soullessness of manufacturing and its products, and in fears about art's loss of purpose in society. Creativity and manufacturing were drifting apart, and the Bauhaus aimed to unite them once again, rejuvenating design for everyday life. A rhythmic attempt at considering both form and function.</p></div>",

  "<div class='7'><img src='./resources/images/7.jpg'> <p class='credit'>Mendieta, Ana. <em>Imagen de Yagul.</em> 1937.</p></div>",

  "<div class='7'><h2>1961-1980: Body Art</h2> <p>Body art diffused the veil between artist and artwork by placing the body front and center as actor, medium, performance, and canvas. Lines were erased between message and messenger or creator and creation, giving new meaning to, and amplifying the idea of, authentic first person perspective. In the post-1960s atmosphere of changing social mores and thawed attitudes toward nudity, the body became a perfect tool to make the political personal. Using the body became a way for an artist to connect the individual with the universal human experience - one person asking others to resonate as a whole.</p></div>",

  "<div class='8'><img src='./resources/images/8.jpg'> <p class='credit'>Kaprow, Allan. <em>Fluids.</em> 1963. Beverly Hills.</p></div>",

  "<div class='8'><h2>1958-Early 1970s: Happenings</h2> <p>A main component of Happenings was the involvement of the viewer. Each instance a Happening occurred the viewer was used to add in an element of chance so, every time a piece was performed or exhibited it would never be the same as the previous time. Unlike preceding works of art which were, by definition, static, Happenings could evolve and provide a unique encounter for each individual who partook in the experience. They were temporal & fleeting. The only artifacts remaining from original Happenings are photographs and oral histories.</p></div>",

  "<div class='9'><img src='./resources/images/9.jpg'> <p class='credit'>Whistler, James Abbott McNeill. <em>Nocturne in Black and Gold: The Falling Rocket.</em> 1875.</p></div>",

  "<div class='9'><h2>1870-1915: Tonalism</h2> <p>The term Tonalism describes a style of American art focused primarily on depicting landscape, emphasizing tonal values to express mood or poetic feeling. Its origins date back to the early 1870s, when James McNeill Whistler, began using musical terms like 'nocturnes', to title his work. At this time, he started looking at paintings as if they were like musical compositions, arranging tonal values and colors as a composer would score a series of related notes.</p> <p>Inspired by strategies of musical composition, the Tonalists developed theories of color and line that they believed heightened the symbolic potential of landscape painting. Tonalist painters emphasized both the formal components of their work - color, line, and shape - and the symbolic meaning conveyed to the viewer. Bypassing narrative as a means of communicating spirituality, their example was instrumental to the development of early-20th-century abstraction.</p></div>",

  "<div class='10'><img src='./resources/images/10.jpg'> <p class='credit'>Prince, Richard. <em>Untitled (Cowboy).</em> 1989.</p></div>",

  "<div class='10'><h2>1974-1984: The Pictures Generation</h2> <p>Influenced by the ubiquity of advertising and the highly saturated image culture of the United States, Pictures Generation artists produced work that itself often resembles advertising. In that challenging traditional art forms that appear handcrafted, these artists situated themselves at the center of postmodern debates about authenticity and authorship while in the process creating art that is slick and has the appearance of mass production. Their works blur the lines between high art and popular imagery.</p> <p>Though many artists in the group were trained formally in traditional disciplines such as painting and sculpture, they elected to utilize their skills in unorthodox ways - re-examining composition, particularly within popular image production. The ready availability of cameras allowed artists to reconsider photography's stance as an artistic medium, composing images with conceptual frameworks.</p></div>",

  "<div class='11'><img src='./resources/images/11.jpg'> <p>Judd, Donald. <em class='italic'>Untitled.</em> 1969.</p></div>",

  "<div class='11'><h2>1960s-Late 1960s: Minimalism</h2> <p>Minimalism emerged in New York in the early 1960s among artists who were self-consciously renouncing recent art they thought had become stale and academic. A wave of new influences and rediscovered styles led younger artists to question conventional boundaries between various media. The new art favored the cool over the \"dramatic\": their sculptures were frequently fabricated from industrial materials and emphasized anonymity over the expressive excess of Abstract Expressionism. Painters and sculptors avoided overt symbolism and emotional content, but instead called attention to the materiality of the works.</p></div>",

  "<div class='12'><img src='./resources/images/12.jpg'> <p class='credit'>Emin, Tracey. <em>My Bed.</em> 1998.</p></div>",

  "<div class='12'><h2>1980s: YBA Young British Artists</h2> <p>The YBAs are notorious for their willingness to shock audiences with gratuitously violent imagery, brazen use of pornography, and their desire to push beyond what many consider the limits of decency. Derogatory UK tabloid press coverage was an important component of their success, as it was all most people knew of the group.</p> <p>The works of the various YBA artists are characterized by their open approach to process and materials, something that can be attributed to the structure of the B.A. Fine Art program at Goldsmiths College where many of them studied. Their courses abandoned the traditional segregation of artistic training into painting, drawing, photography, and sculpture classes in favor of mixed studios.</p></div>"];

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function() {
  MatchGame.renderCards(MatchGame.shuffleCards(cardDeck), "#game");
});

/*
  Generates and returns a shuffled array of card values.
 */

MatchGame.shuffleCards = function(cardDeck) {
  var currentIndex = cardDeck.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cardDeck[currentIndex];
      cardDeck[currentIndex] = cardDeck[randomIndex];
      cardDeck[randomIndex] = temporaryValue;
  }

  return cardDeck;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardDeck, $game) {
  var colors = ["hsl(0, 100%, 50%)", "hsl(25, 100%, 50%)", "hsl(50, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(175, 100%, 50%)", "hsl(260, 100%, 80%)", "hsl(160, 100%, 50%)", "hsl(45, 100%, 40%)", "hsl(115, 100%, 20%)", "hsl(300, 100%, 50%)", "hsl(220, 100%, 50%)", "hsl(270, 100%, 50%)"];
  $($game).empty();
  $($game).data("flippedCards", []);
  for(var j = 0; j < cardDeck.length; j++) {
    var $card = $("<div class='col-xs-4 card'></div>");
    var htmlObject = $(cardDeck[j]);
    var color = colors[htmlObject[0].className - 1];
    $($card).data("value", htmlObject[0].className);
    $($card).data("information", cardDeck[j]);
    $($card).data("flipped", false);
    $($card).data("color", color);
    $($game).append($card);
  }
  $(".card").click(function() {
    MatchGame.flipCard($(this), "#game");
  });

  $(".button").click(function() {
    MatchGame.renderCards(MatchGame.shuffleCards(cardDeck), "#game");
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if($($card).data("flipped")) {
    return;
  }

  $($card).css("background-image", "none");
  $($card).css("background-color", $($card).data("color"));
  $($card).html($($card).data("information"));
  $($card).data("flipped", true);

  var numberFlipped = $($game).data("flippedCards");
  numberFlipped.push($card);

  if(numberFlipped.length === 2) {
    if(numberFlipped[0].data("value") === numberFlipped[1].data("value")) {
      numberFlipped[0].css("background-color", "rgb(153, 153, 153)");
      numberFlipped[0].css("color", "rgb(204, 204, 204)");
      numberFlipped[1].css("background-color", "rgb(153, 153, 153)");
      numberFlipped[1].css("color", "rgb(204, 204, 204)");
      pairs++;
    }
    else {
      window.setTimeout(function() {
        numberFlipped[0].css("background-image", "url('./resources/images/card-front.jpg')");
        numberFlipped[0].css("background-color", "rgb(111, 166, 56)");
        numberFlipped[0].text("");
        numberFlipped[0].data("flipped", false);
        numberFlipped[1].css("background-image", "url('./resources/images/card-front.jpg')");
        console.log(numberFlipped[1].css("background-image"));
        numberFlipped[1].css("background-color", "rgb(111, 166, 56)");
        numberFlipped[1].text("");
        numberFlipped[1].data("flipped", false);
      }, 500);
    }
    $($game).data("flippedCards", []);
  }

  if(pairs === 12) {
    $(".button").css("display", "block");
  }
};