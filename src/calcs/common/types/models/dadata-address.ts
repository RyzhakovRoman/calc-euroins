type StrOrNull = string | null

export interface DadataAddressInterface {
    value: string
    data: {
        block: StrOrNull // "3"
        block_type: StrOrNull // "стр"
        block_type_full: StrOrNull // "строение"
        area: StrOrNull
        area_fias_id: StrOrNull
        area_kladr_id: StrOrNull
        area_type: StrOrNull
        area_type_full: StrOrNull
        area_with_type: StrOrNull
        city: StrOrNull // 'Москва'
        city_area: StrOrNull
        city_district: StrOrNull
        city_district_fias_id: StrOrNull
        city_district_kladr_id: StrOrNull
        city_district_type: StrOrNull
        city_district_type_full: StrOrNull
        city_district_with_type: StrOrNull
        city_fias_id: StrOrNull // '0c5b2444-70a0-4932-980c-b4dc0d3f02b5'
        city_kladr_id: StrOrNull // '7700000000000'
        city_type: StrOrNull // 'г'
        city_type_full: StrOrNull // 'город'
        city_with_type: StrOrNull // 'г Москва'
        fias_code: StrOrNull // '7700000000000000000'
        fias_id: StrOrNull // '0c5b2444-70a0-4932-980c-b4dc0d3f02b5'
        fias_level: StrOrNull // '1'
        flat: StrOrNull
        house: StrOrNull // номер дома
        house_type: StrOrNull // "д"
        house_fias_id: StrOrNull
        house_kladr_id: StrOrNull
        kladr_id: StrOrNull // '7700000000000'
        postal_code: StrOrNull
        region: StrOrNull // 'Москва'
        region_fias_id: StrOrNull // '0c5b2444-70a0-4932-980c-b4dc0d3f02b5'
        region_kladr_id: StrOrNull // '7700000000000'
        region_type: StrOrNull // 'г'
        region_type_full: StrOrNull // 'город'
        region_with_type: StrOrNull // 'г Москва'
        settlement: StrOrNull
        settlement_fias_id: StrOrNull
        settlement_kladr_id: StrOrNull
        settlement_type: StrOrNull
        settlement_type_full: StrOrNull
        settlement_with_type: StrOrNull
        street: StrOrNull
        street_fias_id: StrOrNull
        street_kladr_id: StrOrNull
        street_with_type: StrOrNull
    }
}

export type DadataAddressesType = DadataAddressInterface[]
