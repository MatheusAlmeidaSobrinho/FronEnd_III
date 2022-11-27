import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import { describe, expect } from "vitest"

import { MainLayout } from "./pages/MainLayout"

describe('DecimaQuintaAula component', () => {

    it('Deveria ser renderizado em tela', () => {

        const { getByText } = render(<MainLayout />)

        expect(getByText('Project Displayed')).toBeInTheDocument()

    })

    it('Fluxo cadastro', () => {

        const { getByLabelText, getByText } = render(<MainLayout />)
        const input = getByLabelText('cep')
        const submitButton = getByLabelText('submit-button')

        fireEvent.change(input, { target: { value: '01315000' } })
        fireEvent.click(submitButton)

        setTimeout(() => {

            expect(getByText('Cep: 01315000')).toBeInTheDocument()

        }, 2000)

    })

})