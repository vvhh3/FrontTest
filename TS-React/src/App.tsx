import { useCallback, useState } from 'react'
import Test from './Components/Test'
import { Grid, Text, Button, Box, Flex, Kbd, CheckboxCards, Tabs, Separator } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState<number>(0)

  let status = false

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  return (
    <>
      <Test title='MatveyTop' onClick={handleClick} count={count} />
      <Grid gap="5" columns="2" width="auto" align="center" gridRow="row" mb="9">

        <Flex justify="center">
          <Text size="4">Hello from Radix Themes :)</Text>
        </Flex>

        <Flex justify="center" width="auto">
          <Button color="red" loading={status} size="2" variant="solid" radius="large">
            Let's go
          </Button>
        </Flex>

        <Flex justify="center" width="auto">
          <Kbd size="5">Shift + Tab</Kbd>
        </Flex>
      </Grid>

      <Flex direction="column" gap="3" maxWidth="200px" ml="5" mb="9">
        <CheckboxCards.Root defaultValue={["1"]} color="indigo">
          <CheckboxCards.Item value="1">Agree to Terms</CheckboxCards.Item>
        </CheckboxCards.Root>

        <CheckboxCards.Root defaultValue={["1"]} color="cyan">
          <CheckboxCards.Item value="1">Agree to Terms</CheckboxCards.Item>
        </CheckboxCards.Root>

        <CheckboxCards.Root defaultValue={["1"]} color="orange">
          <CheckboxCards.Item value="1">Agree to Terms</CheckboxCards.Item>
        </CheckboxCards.Root>

        <CheckboxCards.Root defaultValue={["1"]} color="crimson">
          <CheckboxCards.Item value="1">Agree to Terms</CheckboxCards.Item>
        </CheckboxCards.Root>
      </Flex>

      <Tabs.Root defaultValue="account" mb="9">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="documents">Documents</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        </Tabs.List>

        <Box pt="3">
          <Tabs.Content value="account">
            <Text size="2">Make changes to your account.</Text>
          </Tabs.Content>

          <Tabs.Content value="documents">
            <Text size="2">Access and update your documents.</Text>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <Text size="2">Edit your profile or update contact information.</Text>
          </Tabs.Content>
        </Box>
      </Tabs.Root>


      <Flex direction="column" gap="4">
        <Separator orientation="horizontal" size="1" color="orange" style={{height: "3px"}}/>
        <Separator orientation="horizontal" size="2" color="red" style={{height: "3px"}}/>
        <Separator orientation="horizontal" size="3" color="yellow" style={{height: "3px"}}/>
        <Separator orientation="horizontal" size="4" color="ruby" style={{height: "3px"}}/>
      </Flex>
    </>
  )
}

export default App
