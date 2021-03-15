import React from 'react'
import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/client"
import styled from "styled-components"
import Button from './Button'

const StyledNav = styled.nav`
 border-bottom: 1px solid #0404042e;
  ul{
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }
`

export default function Header() {
  const [session, loading] = useSession()
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {session &&
          <li>
            <Link href="/api/auth/logout" passHref>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Logout
          </Button>
            </Link>
          </li>
        }
        {!session &&
          <li>
            <Link href="/api/auth/signin" passHref>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
            </Button>
            </Link>
          </li>
        }
      </ul>
    </StyledNav>

  )


}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  return {
    props: {
      session,
    },
  };
};