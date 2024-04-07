module.exports = {
    params: {
        designator: 'MCU',
        orientation: 'down',
        GND: {type: 'net', value: 'GND'},
        VBUS: {type: 'net', value: 'VBUS'},
        VCC_EN: {type: 'net', value: 'VCC_EN'},
        RUN: {type: 'net', value: 'RUN'},
        USB_DP: {type: 'net', value: 'USB_DP'},
        USB_DM: {type: 'net', value: 'USB_DM'},
        BOOTSEL: {type: 'net', value: 'BOOTSEL'},
        VCC: {type: 'net', value: 'VCC'},
        ADC_REF: {type: 'net', value: 'ADC_REF'},
        SWCLK: {type: 'net', value: 'SWCLK'},
        SWDIO: {type: 'net', value: 'SWDIO'},
        UART0: {type: 'net', value: 'UART0'},
        UART1: {type: 'net', value: 'UART1'},
        P2: {type: 'net', value: 'P2'},
        P3: {type: 'net', value: 'P3'},
        P4: {type: 'net', value: 'P4'},
        P5: {type: 'net', value: 'P5'},
        P6: {type: 'net', value: 'P6'},
        P7: {type: 'net', value: 'P7'},
        P8: {type: 'net', value: 'P8'},
        P9: {type: 'net', value: 'P9'},
        P10: {type: 'net', value: 'P10'},
        P11: {type: 'net', value: 'P11'},
        P12: {type: 'net', value: 'P12'},
        P13: {type: 'net', value: 'P13'},
        P14: {type: 'net', value: 'P14'},
        P15: {type: 'net', value: 'P15'},
        P16: {type: 'net', value: 'P16'},
        P17: {type: 'net', value: 'P17'},
        P18: {type: 'net', value: 'P18'},
        P19: {type: 'net', value: 'P19'},
        P20: {type: 'net', value: 'P20'},
        P21: {type: 'net', value: 'P21'},
        P22: {type: 'net', value: 'P22'},
        P23: {type: 'net', value: 'P23'},
        P24: {type: 'net', value: 'P24'},
        P25: {type: 'net', value: 'P25'},
        P26: {type: 'net', value: 'P26'},
        P27: {type: 'net', value: 'P27'},
        P28: {type: 'net', value: 'P28'},
        P29: {type: 'net', value: 'P29'},
    },
  body: p => `
  (module PGA2040 (layer F.Cu) (tedit 6609C01C)
  ${p.at /* parametric position */}

  ${'' /* footprint reference */}
  (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 0.787401574803 0.787401574803) (thickness 0.15))))
  (fp_text value "PGA2040" (at 0 0) (layer F.Fab) (effects (font (size 0.787401574803 0.787401574803) (thickness 0.15))))

  ${''/* and now the actual pins */}
  (pad GND thru_hole circle (at -8.89 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad VBUS thru_hole circle (at -6.35 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.VBUS.str})
  (pad VCC_EN thru_hole circle (at -3.81 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.VCC_EN.str})
  (pad RUN thru_hole circle (at -1.27 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.RUN.str})
  (pad USB_DP thru_hole circle (at 1.27 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.USB_DP.str})
  (pad USB_DM thru_hole circle (at 3.81 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.USB_DM.str})
  (pad BOOTSEL thru_hole circle (at 6.35 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.BOOTSEL.str})
  (pad GND thru_hole circle (at 8.89 -8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad UART0 thru_hole circle (at -8.89 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.UART0.str})
  (pad GND thru_hole circle (at -6.35 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad VCC thru_hole circle (at -3.81 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.VCC.str})
  (pad ADC_REF thru_hole circle (at -1.27 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.ADC_REF.str})
  (pad SWCLK thru_hole circle (at 1.27 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.SWCLK.str})
  (pad SWDIO thru_hole circle (at 3.81 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.SWDIO.str})
  (pad GND thru_hole circle (at 6.35 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad P29 thru_hole circle (at 8.89 -6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P29.str})
  (pad UART1 thru_hole circle (at -8.89 -3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.UART1.str})
  (pad P3 thru_hole circle (at -8.89 -1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P3.str})
  (pad P5 thru_hole circle (at -8.89 1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P5.str})
  (pad P7 thru_hole circle (at -8.89 3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P7.str})
  (pad P9 thru_hole circle (at -8.89 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P9.str})
  (pad GND thru_hole circle (at -8.89 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad P2 thru_hole circle (at -6.35 -3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P2.str})
  (pad P4 thru_hole circle (at -6.35 -1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P4.str})
  (pad P6 thru_hole circle (at -6.35 1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P6.str})
  (pad p8 thru_hole circle (at -6.35 3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P8.str})
  (pad GND thru_hole circle (at -6.35 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad P10 thru_hole circle (at -6.35 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P10.str})
  (pad P12 thru_hole circle (at -3.81 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P12.str})
  (pad P11 thru_hole circle (at -3.81 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P11.str})
  (pad P14 thru_hole circle (at -1.27 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P14.str})
  (pad P13 thru_hole circle (at -1.27 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P13.str})
  (pad P16 thru_hole circle (at 1.27 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P16.str})
  (pad P15 thru_hole circle (at 1.27 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P15.str})
  (pad P18 thru_hole circle (at 3.81 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P18.str})
  (pad P17 thru_hole circle (at 3.81 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P17.str})
  (pad GND thru_hole circle (at 6.35 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad P19 thru_hole circle (at 6.35 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P19.str})
  (pad P20 thru_hole circle (at 8.89 6.35) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P20.str})
  (pad GND thru_hole circle (at 8.89 8.89) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad P28 thru_hole circle (at 6.35 -3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P28.str})
  (pad P26 thru_hole circle (at 6.35 -1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P26.str})
  (pad P24 thru_hole circle (at 6.35 1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P24.str})
  (pad P22 thru_hole circle (at 6.35 3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P22.str})
  (pad P27 thru_hole circle (at 8.89 -3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P27.str})
  (pad P25 thru_hole circle (at 8.89 -1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P25.str})
  (pad P23 thru_hole circle (at 8.89 1.27) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P23.str})
  (pad P21 thru_hole circle (at 8.89 3.81) (size 1.778 1.778) (drill 1.016) (layers *.Cu *.Mask) (solder_mask_margin 0.102) ${p.P21.str})

  ${'' /* footprint illustration */}
  (fp_line (start -3.26977 -9.43023) (end -2.72954 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.72954 -8.89) (end -3.26977 -8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.72954 -8.89) (end -3.26977 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -0.729772 -9.43023) (end -0.189541 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -0.189541 -8.89) (end -0.729772 -8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -0.189541 -8.89) (end -0.729772 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 1.81023 -9.43023) (end 2.35046 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.35046 -8.89) (end 1.81023 -8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.35046 -8.89) (end 1.81023 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 4.35023 -9.43023) (end 4.89046 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 4.89046 -8.89) (end 4.35023 -8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 4.89046 -8.89) (end 4.35023 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.89023 -9.43023) (end 7.43046 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 7.43046 -8.89) (end 6.89023 -8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 7.43046 -8.89) (end 6.89023 -8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -1.81023 -5.80977) (end -2.35046 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.35046 -6.35) (end -1.81023 -6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.35046 -6.35) (end -1.81023 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 0.729772 -5.80977) (end 0.189541 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 0.189541 -6.35) (end 0.729772 -6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 0.189541 -6.35) (end 0.729772 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 3.26977 -5.80977) (end 2.72954 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.72954 -6.35) (end 3.26977 -6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.72954 -6.35) (end 3.26977 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.34977 -5.80977) (end 7.80954 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 7.80954 -6.35) (end 8.34977 -6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 7.80954 -6.35) (end 8.34977 -6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.34977 -4.35023) (end 8.89 -4.89046) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 -4.89046) (end 9.43023 -4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 -4.89046) (end 8.89 -4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.34977 -1.81023) (end 8.89 -2.35046) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 -2.35046) (end 9.43023 -1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 -2.35046) (end 8.89 -1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.34977 0.729772) (end 8.89 0.189541) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 0.189541) (end 9.43023 0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 0.189541) (end 8.89 0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.34977 3.26977) (end 8.89 2.72954) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 2.72954) (end 9.43023 3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 2.72954) (end 8.89 3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.89023 1.81023) (end 6.35 2.35046) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 2.35046) (end 5.80977 1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 2.35046) (end 6.35 1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.89023 -0.729772) (end 6.35 -0.189541) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 -0.189541) (end 5.80977 -0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 -0.189541) (end 6.35 -0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.89023 -3.26977) (end 6.35 -2.72954) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 -2.72954) (end 5.80977 -3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 -2.72954) (end 6.35 -3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.89023 4.35023) (end 6.35 4.89046) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 4.89046) (end 5.80977 4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 6.35 4.89046) (end 6.35 4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.34977 5.80977) (end 8.89 5.26954) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 5.26954) (end 9.43023 5.80977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 8.89 5.26954) (end 8.89 5.80977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.89023 -4.35023) (end -6.35 -4.89046) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 -4.89046) (end -5.80977 -4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 -4.89046) (end -6.35 -4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.89023 -1.81023) (end -6.35 -2.35046) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 -2.35046) (end -5.80977 -1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 -2.35046) (end -6.35 -1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.89023 0.729772) (end -6.35 0.189541) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 0.189541) (end -5.80977 0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 0.189541) (end -6.35 0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.89023 3.26977) (end -6.35 2.72954) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 2.72954) (end -5.80977 3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 2.72954) (end -6.35 3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.34977 1.81023) (end -8.89 2.35046) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 2.35046) (end -9.43023 1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 2.35046) (end -8.89 1.81023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.34977 -0.729772) (end -8.89 -0.189541) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 -0.189541) (end -9.43023 -0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 -0.189541) (end -8.89 -0.729772) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.34977 -3.26977) (end -8.89 -2.72954) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 -2.72954) (end -9.43023 -3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 -2.72954) (end -8.89 -3.26977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.34977 4.35023) (end -8.89 4.89046) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 4.89046) (end -9.43023 4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 4.89046) (end -8.89 4.35023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.34977 -5.80977) (end -8.89 -5.26954) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 -5.26954) (end -9.43023 -5.80977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 -5.26954) (end -8.89 -5.80977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.34977 6.89023) (end -8.89 7.43046) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 7.43046) (end -9.43023 6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -8.89 7.43046) (end -8.89 6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.89023 8.34977) (end -6.35 7.80954) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 7.80954) (end -5.80977 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -6.35 7.80954) (end -6.35 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -4.35023 9.43023) (end -4.89046 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -4.89046 8.89) (end -4.35023 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -4.89046 8.89) (end -4.35023 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -1.81023 9.43023) (end -2.35046 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.35046 8.89) (end -1.81023 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.35046 8.89) (end -1.81023 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 0.729772 9.43023) (end 0.189541 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 0.189541 8.89) (end 0.729772 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 0.189541 8.89) (end 0.729772 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 3.26977 9.43023) (end 2.72954 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.72954 8.89) (end 3.26977 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.72954 8.89) (end 3.26977 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 5.80977 9.43023) (end 5.26954 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start 5.26954 8.89) (end 5.80977 8.34977) (layer Dwgs.User) (width 0.25))
  (fp_line (start 5.26954 8.89) (end 5.80977 8.89) (layer Dwgs.User) (width 0.25))
  (fp_line (start -3.26977 5.80977) (end -2.72954 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.72954 6.35) (end -3.26977 6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -2.72954 6.35) (end -3.26977 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start -0.729772 5.80977) (end -0.189541 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start -0.189541 6.35) (end -0.729772 6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start -0.189541 6.35) (end -0.729772 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 1.81023 5.80977) (end 2.35046 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.35046 6.35) (end 1.81023 6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 2.35046 6.35) (end 1.81023 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 4.35023 5.80977) (end 4.89046 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start 4.89046 6.35) (end 4.35023 6.89023) (layer Dwgs.User) (width 0.25))
  (fp_line (start 4.89046 6.35) (end 4.35023 6.35) (layer Dwgs.User) (width 0.25))
  (fp_line (start -9.525 -9.825) (end -9.825 -9.525) (layer F.SilkS) (width 0.22))
  (fp_line (start -9.825 -9.825) (end -9.825 -9.525) (layer F.SilkS) (width 0.22))
  (fp_line (start -9.825 -9.825) (end -9.525 -9.825) (layer F.SilkS) (width 0.22))
  (fp_line (start 8.89 10.16) (end -8.89 10.16) (layer F.SilkS) (width 0.2))
  (fp_arc (start -8.89 8.89) (end -10.16 8.89) (angle -90.0) (layer F.SilkS) (width 0.2))
  (fp_line (start -10.16 8.89) (end -10.16 -9.66) (layer F.SilkS) (width 0.2))
  (fp_arc (start -9.66 -9.66) (end -9.66 -10.16) (angle -90.0) (layer F.SilkS) (width 0.2))
  (fp_line (start -9.66 -10.16) (end 8.89 -10.16) (layer F.SilkS) (width 0.2))
  (fp_arc (start 8.89 -8.89) (end 10.16 -8.89) (angle -90.0) (layer F.SilkS) (width 0.2))
  (fp_line (start 10.16 -8.89) (end 10.16 8.89) (layer F.SilkS) (width 0.2))
  (fp_arc (start 8.89 8.89) (end 8.89 10.16) (angle -90.0) (layer F.SilkS) (width 0.2))
)`
}