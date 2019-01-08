import React from 'react'
import Link from '../components/Link'
import Page from '../components/Page'

export default () => (
  <Page
    idx={1}
    body={
      <div>
        <p>
          Rocky and I met on Bumble in mid-October, 2017 in Des Moines.
          Originally from eastern Iowa, he lived in Des Moines for six years
          before moving to San Fransico for three. When we met, he was actually
          two months into his plan of working remotely and traveling for a year.
        </p>
        <p>
          On our first date, dinner at RoCa with a nightcap at the Lift, he told
          me that in a couple of days he was leaving for Medellín, Colombia for
          a month. I wasn't thrilled to hear this bit of news, but was already
          intrigued by him and figured "oh well, if anything I've just met a
          really interesting person." We continued to talk while he was away but
          were careful not to base too much on a four-hour date.
        </p>
        <p>
          "As the end of the month neared, I had to choose. There was a cheap
          flight straight to Spain, where I planned to spend three months. Or I
          could fly back to Des Moines first," Rocky says, "It just seemed like
          something was there. Worst case, I reasoned, you met someone else. I'd
          fly to Spain a few hundred dollars poorer, knowing I tried. I
          convinced myself this was a small price to pay if I was imagining
          things."
        </p>
        <p>
          He didn't tell me he was coming back just for me because he knew I
          would have tried to talk him out of it (even though that's what I
          wanted). He wasn't imagining things, and we spent Christmas day
          together—I made french toast and mimosas and we watched a really
          shitty Netflix Christmas movie. It was perfect.
        </p>
        <p>
          Rocky stayed in Des Moines until the first week of February before
          leaving for three months in Europe. I had all the feelings. I was so
          in love, happy, sad, and unsure but hopeful. A week into his trip, we
          booked a flight for me to visit and travel with him for two weeks. We
          met in Amsterdam and traveled to Brussels, Paris, Budapest, and
          Vienna. It was during this trip that we both realized how real and how
          right we are together.{' '}
          <Link to="https://www.katielovan.com/">View the photos</Link>.
        </p>
      </div>
    }
  />
)
