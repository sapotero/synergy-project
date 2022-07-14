import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

interface DataType {
  type: string;
  name: string;
  nullable?: boolean;
  defaultValue?: string | null;
}

interface Parameter {
  dataType: string; // DataType relation
  name: string;
  selectFrom?: string | null;
  formula?: string | null;
  active: boolean;
}

interface DataModel {
  name: string;
  parameters: Parameter[];
}

interface ModelField {
  id: number;
  scope: string;
  classificationTable?: string;
  classification?: string;
  controlInstance: string
}

@Component({
  selector: 'app-second-stage',
  templateUrl: './second-stage.component.html',
  styleUrls: ['./second-stage.component.css']
})
export class SecondStageComponent implements OnInit {

  classifications: string[] = [
    "OmniClass Table 11",
    "OmniClass Table 12",
    "OmniClass Table 13",
    "OmniClass Table 14",
    "OmniClass Table 21",
    "OmniClass Table 22",
    "OmniClass Table 23",
    "OmniClass Table 31",
    "OmniClass Table 32",
    "OmniClass Table 33",
    "OmniClass Table 34",
    "OmniClass Table 35",
    "OmniClass Table 36",
    "OmniClass Table 41",
    "OmniClass Table 49",
    "Revit Category",
    "Standard Occupational Classification System",
  ]

  scopes: string[] = [
    "Global",
    "Common",
    "Specific",
  ]
  dataTypes: DataType[] = [
    {
      name: "UUID",
      type: "uuid",
      defaultValue: '-',
      nullable: false
    },
    {
      name: "Text",
      type: "text",
      defaultValue: '*',
      nullable: true
    },
    {
      name: "Number",
      type: "integer",
      defaultValue: '-',
      nullable: false
    },
    {
      name: "Select",
      type: "select",
      defaultValue: '-',
      nullable: false
    },
    {
      name: "Multiselect",
      type: "multiselect",
      defaultValue: '-',
      nullable: true
    },
    {
      name: "Date",
      type: "date",
      defaultValue: "Today date",
      nullable: false
    },
    {
      name: "Formula",
      type: "formula",
      defaultValue: '-',
      nullable: true
    },
  ]

  parameters: Parameter[] = [
    {
      name: "First Name",
      dataType: "Text",
      active: true,
    },
    {
      name: "Last Name",
      dataType: "Text",
      active: true,
    },
    {
      name: "Full Name",
      dataType: "Formula",
      active: false,
      formula: "${First Name} + ${Last Name}"
    }
  ]

  parameterDataModels: string[] = [
    "People", "Contact",
  ]

  dataModels: DataModel[] = [
    {
      name: "Global",
      parameters: [
        this.parameters[0],
      ],
    },
    {
      name: "People",
      parameters: [
        this.parameters[0],
        this.parameters[1],
        this.parameters[2],
      ],
    },
    {
      name: "Spaces",
      parameters: [
        this.parameters[2],
        this.parameters[2],
        this.parameters[2],
        this.parameters[2],
      ],
    },
  ]

  validateForm!: FormGroup;
  parameterForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: new FormControl("People"),
      modelParameters: new FormArray([])
    });

    this.parameterForm = this.fb.group({
      name: new FormControl("Parameter name"),
      defaultValue: new FormControl(""),
      nullable: new FormControl(false),
      dataType: new FormControl(),
      selectFrom: new FormControl(),
      formula: new FormControl(""),
    });

    this.parameterForm.controls['selectFrom'].valueChanges.subscribe(data => {
      this.parameterForm.get('formula')?.setValue(`= ${data}: First Name + ${data}: Last Name`)
    })
  }

  modelParameters: () => FormArray = () => this.validateForm.get('modelParameters') as FormArray

  addParameter = (e?: MouseEvent) =>
    this.modelParameters().push(
      new FormGroup({
          id: new FormControl(21),
          name: new FormControl("First Name"),
          scope: new FormControl('Global'),
          classification: new FormControl(''),
          reference: new FormControl(''),
        }
      )
    );

  isSpecific = (control: AbstractControl): Boolean => control?.get('scope')?.value == this.scopes[2]
  isSelect = (): Boolean =>
    this.parameterForm?.get('dataType')?.value == "Multiselect" ||
    this.parameterForm?.get('dataType')?.value == "Select"
}
