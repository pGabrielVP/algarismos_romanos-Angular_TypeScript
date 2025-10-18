import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { VALID_ALGARISMS_REGEX } from './constants/roman_decimal';
import { Converter } from './services/converter';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private converter = inject(Converter);

  toDecimalForm = new FormGroup({
    algarismos: new FormControl('',
      [Validators.pattern(VALID_ALGARISMS_REGEX)]),
  });

  toRomanForm = new FormGroup({
    numero: new FormControl(0,
      [Validators.min(-3999),
      Validators.max(3999)]),
  });

  public toDecimal() {
    if (this.toDecimalForm.valid) {
      const algarismos = this.toDecimalForm.value.algarismos ?? "";
      const decimals = this.converter.toDecimal(algarismos);
      this.toRomanForm.setValue({ numero: decimals })
    }
  }

  public toRoman() {
    if (this.toRomanForm.valid) {
      const numero = this.toRomanForm.value.numero ?? 0;
      const algarismos = this.converter.toRoman(numero);
      this.toDecimalForm.setValue({ algarismos: algarismos })
    }
  }
}
