<script lang="ts">
  import { selectedProvince } from '../stores';

  let selectedProvinceValue: string | null;

  selectedProvince.subscribe((value) => {
    selectedProvinceValue = value;
  });
</script>

<div class="absolute inset-y-0 right-0 w-64 h-72 mx-72 my-72 rounded shadow-lg bg-white p-2 flex flex-col">
  <h2>{selectedProvinceValue}</h2>
  <hr />
  <!-- Some list of liquors from selected province, TODO: Add row with information provided -->
  <div class="grow flex flex-col overflow-auto">
    <div class="mb-2">หมาใจดำ</div>
    <div class="mb-2">Raiyoddoy</div>
    <div class="mb-2">KILO Spirits</div>
  </div>
</div>