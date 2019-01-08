import React from 'react'
import Link from '../components/Link'
import Page from '../components/Page'

export default () => (
  <Page
    idx={3}
    body={
      <div>
        <p>
          After our Courthouse wedding attended by our parents, join us for
          dinner and drinks in celebration.
        </p>
        <div>
          <p>
            6 p.m. on Friday, June 7, 2019
            <br />
            <Link to="https://www.google.com/maps/search/?api=1&query=the+rivewalk+hub+des+moines&query_place_id=ChIJd24kE6uZ7ocR4SSbxvEwEu0">
              The Riverwalk Hub
            </Link>{' '}
            in Des Moines
          </p>
          <p>
            When the music stops around 10 p.m., join us for a nightcap at our
            favorite local bar blocks away.
          </p>
        </div>
        <h2>Directions</h2>
        <ol>
          <li>
            From I-80 W, take exit 137A to merge onto I-235 W. From I-80 E, keep
            left at the fork to continue on I-235 E
          </li>
          <li>Take exit 8A toward Downtown Des Moines and merge onto 3rd St</li>
          <li>Turn left on Court Ave</li>
          <li>
            The Riverwalk Hub is in two blocks, at the corner of Water St and
            Court Ave just before the Des Moines River
          </li>
        </ol>
        <h2>Parking</h2>
        <p>
          The simplest option is the parking ramp at 3rd St and Court Ave, one
          block from The Riverwalk Hub. It is $1/hour with a $10 daily max.
          Parking is free on the Grand Ave, Locust St, Walnut St, and Court Ave
          bridges over the Des Moines River, all are within three blocks of The
          Riverwalk Hub. Meter parking is also available for $1.25/hour and free
          after 9 p.m.
        </p>
      </div>
    }
  />
)
