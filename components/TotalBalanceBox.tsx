import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimiatedCounter from './AnimiatedCounter'
import DoughnurtChart from './DoughnurtChart'


const TotalBalanceBox = ({ accounts = [], totalBanks, totalCurrentBalance }: TotlaBalanceBoxProps) => {
    return (
        <section className="total-balance">
          <div className="total-balance-chart">
            <DoughnurtChart accounts={accounts} />
          </div>
    
          <div className="flex flex-col gap-6">
            <h2 className="header-2">
              Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
              <p className="total-balance-label">
                Total Current Balance
              </p>
    
              <div className="total-balance-amount flex-center gap-2">
                <AnimiatedCounter amount={totalCurrentBalance} />
              </div>
            </div>
          </div>
        </section>
      )
}

export default TotalBalanceBox