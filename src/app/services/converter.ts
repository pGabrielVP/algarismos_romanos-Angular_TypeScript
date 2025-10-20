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
      if (algarismos.charAt(i) === "_"
        && i + 3 < algarismos.length
        && algarismos.charAt(i + 2) === "_") {
        const pair = algarismos.charAt(i) + algarismos.charAt(i + 1);
        const lookaheadPair = algarismos.charAt(i + 2) + algarismos.charAt(i + 3);
        const currentValue = ROMAN_DECIMAL_MAP.get(pair) ?? 0;
        const nextValue = ROMAN_DECIMAL_MAP.get(lookaheadPair) ?? 0;
        if (nextValue > currentValue) {
          total += (nextValue - currentValue);
          i = i + 3;
        } else {
          total += currentValue;
          i = i + 1;
        }
      } else if (algarismos.charAt(i) === "_") {
        const pair = algarismos.charAt(i) + algarismos.charAt(i + 1);
        const currentValue = ROMAN_DECIMAL_MAP.get(pair) ?? 0;
        total += currentValue;
        i = i + 1;
      } else {
        const currentValue = ROMAN_DECIMAL_MAP.get(algarismos.charAt(i)) ?? 0;
        const nextValue = (i + 1 < algarismos.length) ? ROMAN_DECIMAL_MAP.get(algarismos.charAt(i + 1)) ?? 0 : 0;
        if (nextValue > currentValue) {
          total += (nextValue - currentValue);
          i++;
        } else {
          total += currentValue;
        }
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
