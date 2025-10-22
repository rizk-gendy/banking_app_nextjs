import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Rizk", lastName: "Magdy", email: "rizkgendy@gmail.com" }
  const banks = [{ currentBalance: 123}, { currentBalance: 543}]
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Acess and Manage your accoount and Transactions "
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>

        Recent Transactions
      </div>
      <RightSideBar
        user={loggedIn}
        banks={banks} 
        transactions={[]}
        />
    </section>
  )
}

export default Home
