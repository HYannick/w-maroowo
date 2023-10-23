'use client'
import styled from '@emotion/styled'
import WaldeLogo from '@/app/styles/icons/WaldeLogo';

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 0 auto 2rem;
  justify-content: space-between;
  @media screen and (min-width: 1366px) {
    width: 100%;
    max-width: 144rem;
    justify-content: center;
    height: 8rem;
    align-items: center;
  }
`
export const Logo = styled(WaldeLogo)`
  width: 100%;
  height: 100%;
  .text, .chicken {
    fill: var(--color-black);
    transition: fill 0.3s cubic-bezier(0.65, 0, 0.35, 1);
  }
`
export const LogoWrapper = styled.div`
  width: 12rem;
  height: 8rem;
  margin-left: 1rem;
  margin-top: 1rem;
  @media screen and (min-width: 1366px) {
    margin: 0;
  }
`
export const NavigationItem = styled.li`
  a {
    font-size: 4rem;
    position: relative;
    z-index: 1;
    transition: color 0.3s cubic-bezier(0.65, 0, 0.35, 1);
    &:hover {
      color: var(--color-primary);
    }
    &.active {
      color: var(--color-primary);

      &:after {
        opacity: 0.2;
        scale: 1;
      }
    }
    &:after {
      content: '';
      display: none;
      width: 4.6rem;
      top: -1.5rem;
      left: -1rem;
      z-index: 0;
      position: absolute;
      opacity: 0;
      aspect-ratio: 1;
      scale: 0.8;
      transition: opacity 0.6s cubic-bezier(0.65, 0, 0.35, 1), scale 0.6s cubic-bezier(0.65, 0, 0.35, 1);
      background-color: var(--color-primary);
      clip-path: polygon(100.00% 50.00%, 93.30% 75.00%, 75.00% 93.30%, 50.00% 100.00%, 25.00% 93.30%, 6.70% 75.00%, 0.00% 50.00%, 6.70% 25.00%, 25.00% 6.70%, 50.00% 0.00%, 75.00% 6.70%, 93.30% 25.00%);
    }
  }

  @media screen and (min-width: 1366px) {
    a {
      font-size: 1.8rem;
      &:after {
        display: block;
      }
    }
  }
`
export const Navigation = styled.ul`
  width: 100vw;
  height: calc(100vh - 9rem);
  padding: 0;
  list-style: none;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  position: fixed;
  left: 0;
  top: 9rem;
  z-index: 9999;

  li {
    margin-bottom: 2rem;
    text-align: center;
  }
  @media screen and (min-width: 1366px) {
    padding: 0;
    flex: 2;
    height: auto;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    max-width: initial;
    background: transparent;
    position: initial;
    li {
      margin-right: 13rem;
      margin-bottom: 0;
    }
  }
`