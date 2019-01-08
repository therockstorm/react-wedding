import React from 'react'
import Link from '../components/Link'
import Page from '../components/Page'

export default () => (
  <Page
    idx={5}
    body={
      <div>
        <p>
          Accommodations at the new{' '}
          <Link to="https://www.google.com/maps/search/?api=1&query=hilton+des+moines+downtown&query_place_id=ChIJi7bWEAeZ7ocRgtBQycfJXOc">
            Hilton Des Moines Downtown
          </Link>{' '}
          are provided for $149/night if booked before May 8th{' '}
          <Link to="https://www.hilton.com/en/hi/groups/personalized/D/DSMDIHH-LWWX-20190607/index.jhtml?WT.mc_id=POG">
            via this link
          </Link>
          . It's a 10 minute walk from The Riverwalk Hub.
        </p>
        <p>
          Other nearby hotels include Embassy Suites, Residence Inn, Hampton Inn
          & Suites, and Holiday Inn Express & Suites.
        </p>
      </div>
    }
  />
)
