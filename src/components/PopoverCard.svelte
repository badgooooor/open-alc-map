<script lang="ts">
  import { selectedProvince } from '../stores';

  let selectedProvinceValue: string | null;

  selectedProvince.subscribe((value) => {
    selectedProvinceValue = value;
  });
</script>

<div class="absolute inset-y-0 right-0 w-64 h-72 mx-72 my-72 rounded shadow-lg bg-white p-2">
  <h2>{selectedProvinceValue}</h2>
  <div>Some list of liquors from this province</div>
</div>