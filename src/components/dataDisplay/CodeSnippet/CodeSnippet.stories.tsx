import React from 'react'
import { Story } from '@storybook/react'
import { CodeSnippetProps } from './CodeSnippetProps'
import { CodeSnippet } from './CodeSnippet'

export default {
  title: 'Data Display/CodeSnippet',
  component: CodeSnippet,
  parameters: {
    controls: { expanded: true }
  }
}

const ValueSample = `{
  "squadName": "Super hero squad",
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "powers": [
        "Radiation resistance",
      ]
    }
  ]
}`

const SyntaxHighlighterStyle = {
  margin: '-1px 20px',

  background: 'rgb(6 57 99)'
}

const Template: Story<CodeSnippetProps> = (args) => {
  return <CodeSnippet {...args} />
}

export const Default = Template.bind({})
Default.args = {
  language: 'json',
  value: ValueSample,
  fileName: 'Happy Programmers day'
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  language: 'json',
  value: ValueSample,
  fileName: 'Happy Programmers day',
  syntaxHighlighterStyle: SyntaxHighlighterStyle
}
