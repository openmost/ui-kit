<template>

  <main style="padding-top: 83px; min-height: calc(100vh - 148px)">

    <BaseSection title="Typography">
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>

      <hr>

      <h1 class="display-1">Display 1</h1>
      <h1 class="display-2">Display 2</h1>
      <h1 class="display-3">Display 3</h1>
      <h1 class="display-4">Display 4</h1>
      <h1 class="display-5">Display 5</h1>
      <h1 class="display-6">Display 6</h1>

      <hr>

      <p class="lead">This is a lead paragraph. It stands out from regular paragraphs.</p>

    </BaseSection>

    <BaseSection title="Table">


    </BaseSection>


    <BaseSection title="Buttons">

      <div class="d-flex gap-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="link">Link</Button>
        <Button variant="surface">Surface</Button>
      </div>

      <div class="d-flex gap-4 mt-4">
        <Button variant="outline-primary">Primary</Button>
        <Button variant="outline-secondary">Secondary</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-danger">Danger</Button>
        <Button variant="outline-warning">Warning</Button>
        <Button variant="outline-info">Info</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
        <Button variant="outline-link">Link</Button>
        <Button variant="outline-surface">Surface</Button>
      </div>

      <div class="d-flex gap-4 mt-4">
        <Button size="lg" variant="primary">Primary</Button>
        <Button size="lg" variant="secondary">Secondary</Button>
        <Button size="lg" variant="success">Success</Button>
        <Button size="lg" variant="danger">Danger</Button>
        <Button size="lg" variant="warning">Warning</Button>
        <Button size="lg" variant="info">Info</Button>
        <Button size="lg" variant="light">Light</Button>
        <Button size="lg" variant="dark">Dark</Button>
        <Button size="lg" variant="link">Link</Button>
        <Button size="lg" variant="surface">Surface</Button>
      </div>

      <div class="d-flex gap-4 mt-4">
        <Button size="lg" variant="outline-primary">Primary</Button>
        <Button size="lg" variant="outline-secondary">Secondary</Button>
        <Button size="lg" variant="outline-success">Success</Button>
        <Button size="lg" variant="outline-danger">Danger</Button>
        <Button size="lg" variant="outline-warning">Warning</Button>
        <Button size="lg" variant="outline-info">Info</Button>
        <Button size="lg" variant="outline-light">Light</Button>
        <Button size="lg" variant="outline-dark">Dark</Button>
        <Button size="lg" variant="outline-link">Link</Button>
        <Button size="lg" variant="outline-surface">Surface</Button>
      </div>

      <div class="d-flex gap-4 mt-4">
        <Button variant="outline-primary">
          <template #icon>
            <IconCopy/>
          </template>
          Primary
        </Button>

        <Button variant="primary">
          <template #icon>
            <IconCopy/>
          </template>
          Primary
        </Button>

        <Button variant="primary" disabled>
          <template #icon>
            <IconCopy/>
          </template>
          Primary
        </Button>

      </div>

      <div class="d-flex gap-4 mt-4">

        <Button size="lg" variant="outline-primary">
          <template #icon>
            <IconCopy/>
          </template>
          Primary
        </Button>

        <Button size="lg" variant="primary">
          <template #icon>
            <IconCopy/>
          </template>
          Primary
        </Button>

        <Button size="lg" variant="primary" disabled>
          <template #icon>
            <IconCopy/>
          </template>
          Primary
        </Button>
      </div>

    </BaseSection>


    <BaseSection title="Form">

      <div class="d-flex flex-column gap-4">

        <FormGroup label="Form group label" label-for="form-group-input" description="The description">
          <FormInput id="form-group-input" placeholder="name@example.com"/>
        </FormGroup>

        <FormGroup label="Form group label" label-for="form-group-textarea" description="The description">
          <FormTextarea id="form-group-textarea" rows="3"/>
        </FormGroup>

        <FormInput id="form-group-input" placeholder="name@example.com" size="lg"/>
        <FormInput id="form-group-input" placeholder="name@example.com"/>
        <FormInput id="form-group-input" placeholder="name@example.com" size="sm"/>

        <FormTextarea id="form-group-textarea" rows="3" size="lg"/>
        <FormTextarea id="form-group-textarea" rows="3"/>
        <FormTextarea id="form-group-textarea" rows="3" size="sm"/>

        <FormInput id="form-group-input" placeholder="Disabled input" disabled/>
        <FormInput id="form-group-input" placeholder="Disabled readonly input" disabled readonly/>

        <FormInput type="file"/>

        <FormSelect :options="[{text: 'Option 1', value: 1}, {text: 'Option 2', value: 2}]"/>
        <FormSelect size="lg" :options="[{text: 'Option 1', value: 1}, {text: 'Option 2', value: 2}]"/>

        <FormCheckbox id="checka">Default checkbox</FormCheckbox>
        <FormCheckbox id="checkb" checked>Checked checkbox</FormCheckbox>
        <FormCheckbox id="checkc" disabled>Checked checkbox</FormCheckbox>
        <FormCheckboxGroup :options="[{text: 'Option 1', value: 1}, {text: 'Option 2', value: 2}]"/>

        <FormRadio id="radioa">Checked checkbox</FormRadio>
        <FormRadio id="radiob" disabled>Checked checkbox</FormRadio>
        <FormRadioGroup :options="[{text: 'Option 1', value: 1}, {text: 'Option 2', value: 2}]"/>

        <FormCheckbox id="checkd" switch>Default checkbox</FormCheckbox>
        <FormCheckbox id="checke" switch checked>Default checkbox</FormCheckbox>
        <FormCheckbox id="checkf" switch disabled>Default checkbox</FormCheckbox>
        <FormCheckbox id="checkg" switch disabled checked>Default checkbox</FormCheckbox>

      </div>

    </BaseSection>


    <BaseSection title="Form group">

      <div class="d-flex flex-column gap-4">
        <FormInputGroup prepend="@">
          <FormInput id="input" placeholder="Username"/>
        </FormInputGroup>

        <FormInputGroup append="@example.com">
          <FormInput id="input" placeholder="Recipient's username"/>
        </FormInputGroup>

        <FormGroup label="Your vanity URL" label-for="input"
                   description="Example help text goes outside the input group.">
          <FormInputGroup prepend="https://example.com/users/">
            <FormInput id="input"/>
          </FormInputGroup>
        </FormGroup>

        <FormInputGroup prepend="$" append=".00">
          <FormInput id="input" placeholder="Username"/>
        </FormInputGroup>

        <FormInputGroup>
          <FormInput id="input" placeholder="Username"/>
          <FormInputGroupText>@</FormInputGroupText>
          <FormInput id="input" placeholder="Server"/>
        </FormInputGroup>

        <FormInputGroup prepend="With textarea">
          <FormTextarea/>
        </FormInputGroup>
      </div>

    </BaseSection>

  </main>

</template>
<script setup lang="ts">
</script>
