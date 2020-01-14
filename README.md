Star Wars Spoiler Generator
=================

This is an homage to [an XKCD that my team at work liked](https://xkcd.com/2243/)

*(With credits to Randall Munroe, and apologies to George Lucas)*


# [Live Demo](https://starwars-spoiler-generator.glitch.me/)

# What it Does

On each page-load, it will use a small javascript function to generate a "spoiler" for a Starwars movie. With the exception of the title, the random text generator exactly implements the spec [from the XKCD](https://xkcd.com/2243/).

After generating the spoiler, it displays it in a very Star-Warsy fashion, using some clever [CSS Animations](https://css-tricks.com/snippets/css/star-wars-crawl-text/). This is nice, because doing these kinds of transformations in javascript would have been a bit of a chore.





# Caveats / Future Work
- It doesn't work well on mobile yet (or maybe ever), though this could be achieved by a motivated person with some CSS Media queries.
- The titles aren't randomly generated, but selected from a batch I created on my own. In the future, a Markov Chain could be a fun way to do this. Or GPT-2...
- The story is "randomly generated"... but still it's actually only generated via a very simple DAG structure given in the XKCD. A motivated person could use a [neural network of the GPT-2/Transformer variety](https://www.gwern.net/GPT-2) to do some neat stuff on this front.



-----------------

This project (like most of my simple web projects these days) was built on glitch.com. You should check it out.