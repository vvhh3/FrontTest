import { Grid, Text, Button, Box, Flex, Kbd, CheckboxCards, Tabs, Separator, Select, Progress, Popover } from "@radix-ui/themes";


const Radix = () => {
    let status = false
    return (
        <div className="m-5">
            <Grid gap="5" columns="2" p="2" width="auto" align="center" gridRow="row" mb="9"
            style={{
                border: "1px solid black"
            }}>

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


            <Flex direction="column" gap="4" mb="9">
                <Separator orientation="horizontal" size="1" color="orange" style={{ height: "3px" }} />
                <Separator orientation="horizontal" size="2" color="red" style={{ height: "3px" }} />
                <Separator orientation="horizontal" size="3" color="yellow" style={{ height: "3px" }} />
                <Separator orientation="horizontal" size="4" color="ruby" style={{ height: "3px" }} />
            </Flex>

            <Flex gap="3" mb="9" ml="5">
                <Select.Root defaultValue="apple">
                    <Select.Trigger radius="none" />
                    <Select.Content>
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                </Select.Root>

                <Select.Root defaultValue="apple">
                    <Select.Trigger radius="large" />
                    <Select.Content>
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                </Select.Root>

                <Select.Root defaultValue="apple">
                    <Select.Trigger radius="full" />
                    <Select.Content>
                        <Select.Item value="apple">Apple</Select.Item>
                        <Select.Item value="orange">Orange</Select.Item>
                    </Select.Content>
                </Select.Root>
            </Flex>

            <Grid columns="2" gap="4" mb="9">
                <Progress value={10} color="indigo" />
                <Progress value={10} color="indigo" highContrast />
                <Progress value={30} color="cyan" />
                <Progress value={30} color="cyan" highContrast />
                <Progress value={50} color="orange" />
                <Progress value={50} color="orange" highContrast />
                <Progress value={70} color="crimson" />
                <Progress value={70} color="crimson" highContrast />
                <Progress value={90} color="gray" />
                <Progress value={90} color="gray" highContrast />
            </Grid>

            <Flex gap="4" align="center" mb="9">
                <Popover.Root>
                    <Popover.Trigger>
                        <Button variant="soft">Size 1</Button>
                    </Popover.Trigger>
                    <Popover.Content size="1" maxWidth="300px">
                        <Text as="p" trim="both" size="1">
                            The quick brown fox jumps over the lazy dog.
                        </Text>
                    </Popover.Content>
                </Popover.Root>

                <Popover.Root>
                    <Popover.Trigger>
                        <Button variant="soft">Size 2</Button>
                    </Popover.Trigger>
                    <Popover.Content size="2" maxWidth="400px">
                        <Text as="p" trim="both" size="2">
                            The quick brown fox jumps over the lazy dog.
                        </Text>
                    </Popover.Content>
                </Popover.Root>

                <Popover.Root>
                    <Popover.Trigger>
                        <Button variant="soft">Size 3</Button>
                    </Popover.Trigger>
                    <Popover.Content size="3" maxWidth="500px">
                        <Text as="p" trim="both" size="3">
                            The quick brown fox jumps over the lazy dog.
                        </Text>
                    </Popover.Content>
                </Popover.Root>

                <Popover.Root>
                    <Popover.Trigger>
                        <Button variant="soft">Size 4</Button>
                    </Popover.Trigger>
                    <Popover.Content size="4">
                        <Text as="p" trim="both" size="4">
                            The quick brown fox jumps over the lazy dog.
                        </Text>
                    </Popover.Content>
                </Popover.Root>
            </Flex>
        </div>
    )
}

export default Radix