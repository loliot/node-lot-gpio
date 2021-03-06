module.exports = {
    AK8963_ADDRESS: 0x0c,
    AK8963_WHO_AM_I: 0x00,
    AK8963_INFO: 0x01,
    AK8963_ST1: 0x02,
    AK8963_XOUT_L: 0x03,
    AK8963_XOUT_H: 0x04,
    AK8963_YOUT_L: 0x05,
    AK8963_YOUT_H: 0x06,
    AK8963_ZOUT_L: 0x07,
    AK8963_ZOUT_H: 0x08,
    AK8963_ST2: 0x09,
    AK8963_CNTL1: 0x0a,
    AK8963_CNTL2: 0x0b,
    AK8963_ASTC: 0x0c,
    AK8963_I2CDIS: 0x0f,
    AK8963_ASAX: 0x10,
    AK8963_ASAY: 0x11,
    AK8963_ASAZ: 0x12,

    // AK8963_CNTL1 :0x0A,
    AK8963_16_BIT_OUTPUT: 0x10,
    AK8963_14_BIT_OUTPUT: 0x00,
    AK8963_POWER_DOWN_MODE: 0x00,
    AK8963_SINGLE_MEASUREMENT_MODE: 0x01,
    AK8963_CONTINUOUS_MEASUREMENT_MODE_1: 0x02,
    AK8963_CONTINUOUS_MEASUREMENT_MODE_2: 0x06,
    AK8963_EXTERNAL_TRIGGER_MEASUREMENT_MODE: 0x40,
    AK8963_SELF_TEST_MODE: 0x08,
    AK8963_FUSE_ROM_ACCESS_MODE: 0x0f,

    // AK8963_CNTL2 :0x0B,
    AK8963_SOFT_RESET: 0x01,

    MPU9250_ADDRESS: 0x68,
    MPU9250_ADDRESS_2: 0x69,

    MPU9250_SELF_TEST_X_GYRO: 0x00,
    MPU9250_SELF_TEST_Y_GYRO: 0x01,
    MPU9250_SELF_TEST_Z_GYRO: 0x02,
    MPU9250_SELF_TEST_X_ACCEL: 0x0d,
    MPU9250_SELF_TEST_Y_ACCEL: 0x0e,
    MPU9250_SELF_TEST_Z_ACCEL: 0x0f,
    MPU9250_XG_OFFSET_H: 0x13,
    MPU9250_XG_OFFSET_L: 0x14,
    MPU9250_YG_OFFSET_H: 0x15,
    MPU9250_YG_OFFSET_L: 0x16,
    MPU9250_ZG_OFFSET_H: 0x17,
    MPU9250_ZG_OFFSET_L: 0x18,
    MPU9250_SMPLRT_DIV: 0x19,
    MPU9250_CONFIG: 0x1a,
    MPU9250_GYRO_CONFIG: 0x1b,
    MPU9250_ACCEL_CONFIG: 0x1c,
    MPU9250_ACCEL_CONFIG2: 0x1d,
    MPU9250_LP_ACCEL_ODR: 0x1e,
    MPU9250_WOM_THR: 0x1f,
    MPU9250_FIFO_EN: 0x23,
    MPU9250_I2C_MST_CTRL: 0x24,
    MPU9250_I2C_SLV0_ADDR: 0x25,
    MPU9250_I2C_SLV0_REG: 0x26,
    MPU9250_I2C_SLV0_CTRL: 0x27,
    MPU9250_I2C_SLV1_ADDR: 0x28,
    MPU9250_I2C_SLV1_REG: 0x29,
    MPU9250_I2C_SLV1_CTRL: 0x2a,
    MPU9250_I2C_SLV2_ADDR: 0x2b,
    MPU9250_I2C_SLV2_REG: 0x2c,
    MPU9250_I2C_SLV2_CTRL: 0x2d,
    MPU9250_I2C_SLV3_ADDR: 0x2e,
    MPU9250_I2C_SLV3_REG: 0x2f,
    MPU9250_I2C_SLV3_CTRL: 0x30,
    MPU9250_I2C_SLV4_ADDR: 0x31,
    MPU9250_I2C_SLV4_REG: 0x32,
    MPU9250_I2C_SLV4_DO: 0x33,
    MPU9250_I2C_SLV4_CTRL: 0x34,
    MPU9250_I2C_SLV4_DI: 0x35,
    MPU9250_I2C_MST_STATUS: 0x36,
    MPU9250_INT_PIN_CFG: 0x37,
    MPU9250_INT_ENABLE: 0x38,
    MPU9250_INT_STATUS: 0x3a,
    MPU9250_ACCEL_XOUT_H: 0x3b,
    MPU9250_ACCEL_XOUT_L: 0x3c,
    MPU9250_ACCEL_YOUT_H: 0x3d,
    MPU9250_ACCEL_YOUT_L: 0x3e,
    MPU9250_ACCEL_ZOUT_H: 0x3f,
    MPU9250_ACCEL_ZOUT_L: 0x40,
    MPU9250_TEMP_OUT_H: 0x41,
    MPU9250_TEMP_OUT_L: 0x42,
    MPU9250_GYRO_XOUT_H: 0x43,
    MPU9250_GYRO_XOUT_L: 0x44,
    MPU9250_GYRO_YOUT_H: 0x45,
    MPU9250_GYRO_YOUT_L: 0x46,
    MPU9250_GYRO_ZOUT_H: 0x47,
    MPU9250_GYRO_ZOUT_L: 0x48,
    MPU9250_EXT_SENS_DATA_00: 0x49,
    MPU9250_EXT_SENS_DATA_01: 0x4a,
    MPU9250_EXT_SENS_DATA_02: 0x4b,
    MPU9250_EXT_SENS_DATA_03: 0x4c,
    MPU9250_EXT_SENS_DATA_04: 0x4d,
    MPU9250_EXT_SENS_DATA_05: 0x4e,
    MPU9250_EXT_SENS_DATA_06: 0x4f,
    MPU9250_EXT_SENS_DATA_07: 0x50,
    MPU9250_EXT_SENS_DATA_08: 0x51,
    MPU9250_EXT_SENS_DATA_09: 0x52,
    MPU9250_EXT_SENS_DATA_10: 0x53,
    MPU9250_EXT_SENS_DATA_11: 0x54,
    MPU9250_EXT_SENS_DATA_12: 0x55,
    MPU9250_EXT_SENS_DATA_13: 0x56,
    MPU9250_EXT_SENS_DATA_14: 0x57,
    MPU9250_EXT_SENS_DATA_15: 0x58,
    MPU9250_EXT_SENS_DATA_16: 0x59,
    MPU9250_EXT_SENS_DATA_17: 0x5a,
    MPU9250_EXT_SENS_DATA_18: 0x5b,
    MPU9250_EXT_SENS_DATA_19: 0x5c,
    MPU9250_EXT_SENS_DATA_20: 0x5d,
    MPU9250_EXT_SENS_DATA_21: 0x5e,
    MPU9250_EXT_SENS_DATA_22: 0x5f,
    MPU9250_EXT_SENS_DATA_23: 0x60,
    MPU9250_I2C_SLV0_DO: 0x63,
    MPU9250_I2C_SLV1_DO: 0x64,
    MPU9250_I2C_SLV2_DO: 0x65,
    MPU9250_I2C_SLV3_DO: 0x66,
    MPU9250_I2C_MST_DELAY_CTRL: 0x67,
    MPU9250_SIGNAL_PATH_RESET: 0x68,
    MPU9250_MOT_DETECT_CTRL: 0x69,
    MPU9250_USER_CTRL: 0x6a,
    MPU9250_PWR_MGMT_1: 0x6b,
    MPU9250_PWR_MGMT_2: 0x6c,
    MPU9250_FIFO_COUNTH: 0x72,
    MPU9250_FIFO_COUNTL: 0x73,
    MPU9250_FIFO_R_W: 0x74,
    MPU9250_WHO_AM_I: 0x75,
    MPU9250_XA_OFFSET_H: 0x77,
    MPU9250_XA_OFFSET_L: 0x78,
    MPU9250_YA_OFFSET_H: 0x7a,
    MPU9250_YA_OFFSET_L: 0x7b,
    MPU9250_ZA_OFFSET_H: 0x7d,
    MPU9250_ZA_OFFSET_L: 0x7e,

    // MPU9250_CONFIG :0x1A,
    MPU9250_DLPF_CFG_0: 0x00,
    MPU9250_DLPF_CFG_1: 0x01,
    MPU9250_DLPF_CFG_2: 0x02,
    MPU9250_DLPF_CFG_3: 0x03,
    MPU9250_DLPF_CFG_4: 0x04,
    MPU9250_DLPF_CFG_5: 0x05,
    MPU9250_DLPF_CFG_6: 0x06,
    MPU9250_DLPF_CFG_7: 0x07,

    // MPU9250_GYRO_CONFIG :0x1B,
    MPU9250_GYRO_FS_SEL_250DPS: 0x00,
    MPU9250_GYRO_FS_SEL_500DPS: 0x08,
    MPU9250_GYRO_FS_SEL_1000DPS: 0x10,
    MPU9250_GYRO_FS_SEL_2000DPS: 0x18,
    MPU9250_GYRO_FCHOICE_X0: 0x00,
    MPU9250_GYRO_FCHOICE_01: 0x01,
    MPU9250_GYRO_FCHOICE_11: 0x03,

    // MPU9250_ACCEL_CONFIG :0x1C,
    MPU9250_ACCEL_FS_SEL_2G: 0x00,
    MPU9250_ACCEL_FS_SEL_4G: 0x08,
    MPU9250_ACCEL_FS_SEL_8G: 0x10,
    MPU9250_ACCEL_FS_SEL_16G: 0x18,

    // MPU9250_ACCEL_CONFIG2 :0x1D,
    MPU9250_ACCEL_FCHOICE_0: 0x00,
    MPU9250_ACCEL_FCHOICE_1: 0x08,
    MPU9250_A_DLPFCFG_0: 0x00,
    MPU9250_A_DLPFCFG_1: 0x01,
    MPU9250_A_DLPFCFG_2: 0x02,
    MPU9250_A_DLPFCFG_3: 0x03,
    MPU9250_A_DLPFCFG_4: 0x04,
    MPU9250_A_DLPFCFG_5: 0x05,
    MPU9250_A_DLPFCFG_6: 0x06,
    MPU9250_A_DLPFCFG_7: 0x07,

    // MPU9250_I2C_MST_CTRL :0x24,
    MPU9250_I2C_MST_CLK_13: 0x0d,

    // MPU9250_I2C_SLVx_ADDR
    MPU9250_I2C_SLVx_READ: 0x80,
    MPU9250_I2C_SLVx_WRITE: 0x00,

    // MPU9250_I2C_SLVx_CTRL
    MPU9250_I2C_SLVx_EN: 0x80,
    MPU9250_I2C_SLVx_BYTE_SWAP: 0x40,
    MPU9250_I2C_SLVx_REG_DIS: 0x20,
    MPU9250_I2C_SLVx_GRP_EVEN_END: 0x10,
    MPU9250_I2C_SLVx_GRP_ODD_END: 0x00,
    MPU9250_I2C_SLVx_LENG: 0x01,

    // MPU9250_I2C_MST_DELAY_CTRL :0x67,
    MPU9250_I2C_SLV0_DLY_EN: 0x01,

    // MPU9250_USER_CTRL :0x6A,
    MPU9250_I2C_MST_EN: 0x20,

    // MPU9250_PWR_MGMT_1 :0x6B,
    MPU9250_H_RESET: 0x80,
    MPU9250_CLKSEL_PLL: 0x01
};
