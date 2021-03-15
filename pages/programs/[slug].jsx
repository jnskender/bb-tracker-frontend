import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link';
import React from 'react'
import SingleProgram from '../../components/SingleProgram';


export default function Program({ query }) {

  return (
    <div>
      <SingleProgram slug={query.slug}/>
    </div>
  )
}
