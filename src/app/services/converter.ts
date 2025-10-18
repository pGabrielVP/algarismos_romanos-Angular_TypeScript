import { Injectable } from '@angular/core';
import { ROMAN_DECIMAL_MAP } from '../constants/roman_decimal';
import { VALORES, SIMBOLOS } from '../constants/decimal_roman';

@Injectable({
  providedIn: 'root'
})
export class Converter {

  public toDecimal(algarismos: string): number {
    algarismos = algarismos.toUpperCase();
    let total = 0;
    for (let i = 0; i < algarismos.length; i++) {
      const currentValue = ROMAN_DECIMAL_MAP.get(algarismos.charAt(i)) ?? 0;
      const nextValue = (i + 1 < algarismos.length) ? ROMAN_DECIMAL_MAP.get(algarismos.charAt(i + 1)) ?? 0 : 0;

      if (nextValue > currentValue) {
        total += (nextValue - currentValue);
        i++;
      } else {
        total += currentValue;
      }
    }
    return total;
  }

  public toRoman(numero: number): string {
    if (numero === 0) return "";
    numero = Math.abs(numero);
    let resultado: string = "";
    for (let i = 0; i < VALORES.length; i++) {
      while (numero >= VALORES[i]) {
        numero = numero - VALORES[i];
        resultado = resultado + SIMBOLOS[i];
      }
    }
    return resultado;
  }
}
