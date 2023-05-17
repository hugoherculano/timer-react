import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  InputTask,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
} from './styles'
import { useForm } from 'react-hook-form'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <InputTask
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto Palmerda"></option>
            <option value="Projeto Corinthians"></option>
            <option value="Projeto Trigo"></option>
            <option value="Projeto Palmerda"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
