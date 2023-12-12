import { useState } from 'react'

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  const total = good.value + neutral.value + bad.value

  if (total === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <div>No feedback given</div>
      </div>
    )
  }

  const average = (good.value - bad.value) / total
  const positive = (good.value / total) * 100
  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine label={good.title} value={good.value} />
      <StatisticsLine label={neutral.title} value={neutral.value} />
      <StatisticsLine label={bad.title} value={bad.value} />
      <StatisticsLine label="all" value={total} />
      <StatisticsLine label="average" value={average} />
      <StatisticsLine label="positive" value={`${positive}%`} />
    </div>
  )
}

const StatisticsLine = ({ label, value }) => <div>{label} {value}</div>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const data = {
    good: {
      title: 'good',
      value: good,
    },
    neutral: {
      title: 'neutral',
      value: neutral,
    },
    bad: {
      title: 'bad',
      value: bad,
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button text={data.good.title} onClick={() => setGood(good + 1)} />
      <Button text={data.neutral.title} onClick={() => setNeutral(neutral + 1)} />
      <Button text={data.bad.title} onClick={() => setBad(bad + 1)} />
      <Statistics good={data.good} neutral={data.neutral} bad={data.bad} />
    </div>
  )
}

export default App