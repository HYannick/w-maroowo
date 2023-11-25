'use client'
import styled from '@emotion/styled'

export const FooterNavListContainer = styled.div`
  .footer-nav-list {
    &-heading {
      font-size: 3rem;
      font-family: var(--yeseva-one);
      position: relative;
      color: var(--color-black);
      text-align: center;

      &:before {
        content: '';
        position: absolute;
        top: -2.5rem;
        left: -4rem;
        width: 9rem;
        height: 8rem;
        z-index: -1;
        transform: rotate(45deg);
        clip-path: var(--polygon-14);
        background-color: var(--color-heading-footer-polygon);
        display: none;
      }
    }

    &-items {
      margin-top: 3rem;

      ul {
        list-style: none;
        padding: 0;
        font-size: 1.8rem;
        text-align: center;

        li {
          margin-bottom: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: 1366px) {
    .footer-nav-list {
      &-heading {
        text-align: left;

        &:before {
          display: block;
        }
      }

      &-items {
        ul {
          text-align: left;
        }
      }
    }
  }
`

export const FooterWrapper = styled.div`
  border-top: 0.1rem solid var(--footer-border-color);
  margin-top: 5rem;



  .footer-container {
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
    padding: 5rem 1rem 0;
  }

  .footer-navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  .footer-top-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }


  @media screen and (min-width: 1366px) {
    border-top: 0.1rem solid var(--footer-border-color);
    margin-top: 5rem;
    .footer-navigation {
      flex-direction: row;
      align-items: flex-start;
      gap: 10rem;
    }

    .footer-top-content {
      flex-direction: row;
    }
  }
`