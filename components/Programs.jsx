import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import Link from 'next/link';
import React from 'react'
import styled from "styled-components"

const ALL_PRODUCTS_QUERY = gql`
  query getPrograms {
    programs {
      id,
      name,
      slug
    }
  }
`

const StyledPrograms = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;

  a{
    font-size: 2rem;
    font-weight: 500;
  }
`
export default function Programs() {
  const { data, loading, error } = useQuery(ALL_PRODUCTS_QUERY);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <StyledPrograms>
    <h1>Programs</h1>
      <ul>
        {data.programs.map(program => {
          return (
            <li key={program.id}>
              <Link href={`/programs/${program.slug}`}>{program.name}</Link>
            </li>
          )
        })}

      </ul>
    </StyledPrograms>
  )
}
