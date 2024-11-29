import React from 'react'
/*import AnimatedCounter from './AnimatedCounter'*/

const TotalBalanceBox = ({
    accounts , totalBanks , totalCurrentBalance
}:TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            {/* DoughnutChart*/}
        </div>
        <div className='flex flex-col  gap-6'>
            <h2 className='header-2'>
            Bank accounts : {totalBanks} 
            </h2>
            
        </div>

        
    </section>
  )
}

export default TotalBalanceBox